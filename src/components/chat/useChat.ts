import { useState, useRef, useCallback } from 'react';
import { GoogleGenAI } from '@google/genai';
import {
  SYSTEM_PROMPT,
  MODEL_ID,
  GENERATION_CONFIG,
  SAFETY_SETTINGS,
  MAX_TURNS,
  MAX_INPUT_LENGTH,
  DEBOUNCE_MS,
  WELCOME_TEXT,
} from './chatConfig';
import type { ChatMessage } from './types';

function makeWelcome(): ChatMessage {
  return {
    id: 'welcome',
    role: 'assistant',
    content: WELCOME_TEXT,
    timestamp: Date.now(),
  };
}

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([makeWelcome()]);
  const [isLoading, setIsLoading] = useState(false);
  const [turnCount, setTurnCount] = useState(0);

  const chatRef = useRef<ReturnType<GoogleGenAI['chats']['create']> | null>(null);
  const lastSendRef = useRef<number>(0);

  const getOrCreateChat = useCallback(() => {
    if (!chatRef.current) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        console.error('[Hotelly Mascote] GEMINI_API_KEY not available');
        throw new Error('API key not configured');
      }
      const ai = new GoogleGenAI({ apiKey });
      chatRef.current = ai.chats.create({
        model: MODEL_ID,
        config: {
          systemInstruction: SYSTEM_PROMPT,
          temperature: GENERATION_CONFIG.temperature,
          topP: GENERATION_CONFIG.topP,
          topK: GENERATION_CONFIG.topK,
          maxOutputTokens: GENERATION_CONFIG.maxOutputTokens,
          safetySettings: SAFETY_SETTINGS,
        },
        history: [],
      });
    }
    return chatRef.current;
  }, []);

  const sendMessage = useCallback(
    async (text: string) => {
      const now = Date.now();
      if (now - lastSendRef.current < DEBOUNCE_MS) return;
      if (turnCount >= MAX_TURNS) return;
      if (!text.trim() || text.length > MAX_INPUT_LENGTH) return;

      lastSendRef.current = now;

      const sanitized = text
        .replace(/<[^>]*>/g, '')
        .replace(/\{[^}]*\}/g, '')
        .trim()
        .slice(0, MAX_INPUT_LENGTH);

      if (!sanitized) return;

      const userMsg: ChatMessage = {
        id: `user-${Date.now()}`,
        role: 'user',
        content: sanitized,
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setIsLoading(true);

      try {
        const chat = getOrCreateChat();
        const result = await chat.sendMessage({ message: sanitized });
        const responseText = result.text ?? '';

        const assistantMsg: ChatMessage = {
          id: `assistant-${Date.now()}`,
          role: 'assistant',
          content: responseText,
          timestamp: Date.now(),
        };

        setMessages((prev) => [...prev, assistantMsg]);
        setTurnCount((prev) => prev + 1);
      } catch (error: any) {
        const debugInfo = `[DEBUG] ${error?.message || error?.toString() || 'Unknown error'}`;
        console.error('[Hotelly Mascote] Erro:', debugInfo);

        const errorMsg: ChatMessage = {
          id: `error-${Date.now()}`,
          role: 'assistant',
          content: debugInfo,
          timestamp: Date.now(),
        };
        setMessages((prev) => [...prev, errorMsg]);
      } finally {
        setIsLoading(false);
      }
    },
    [turnCount, getOrCreateChat],
  );

  const resetSession = useCallback(() => {
    chatRef.current = null;
    setMessages([makeWelcome()]);
    setTurnCount(0);
  }, []);

  return {
    messages,
    isLoading,
    turnCount,
    maxTurns: MAX_TURNS,
    maxInputLength: MAX_INPUT_LENGTH,
    sendMessage,
    resetSession,
    isMaxTurnsReached: turnCount >= MAX_TURNS,
  };
}
