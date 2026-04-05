import { useState, useRef, useCallback } from 'react';
import {
  MAX_TURNS,
  MAX_INPUT_LENGTH,
  DEBOUNCE_MS,
  WELCOME_TEXT,
} from './chatConfig';
import type { ChatMessage } from './types';

const WORKER_URL = 'https://hotelly-mascot-worker.marciolms.workers.dev/api/chat';

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

  const lastSendRef = useRef<number>(0);

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
        // Build history from messages (exclude welcome and error messages)
        const history = messages
          .filter((m) => m.id !== 'welcome' && !m.id.startsWith('error-'))
          .map((m) => ({ role: m.role, content: m.content }));

        const response = await fetch(WORKER_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: sanitized, history }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Erro desconhecido');
        }

        const assistantMsg: ChatMessage = {
          id: `assistant-${Date.now()}`,
          role: 'assistant',
          content: data.reply,
          timestamp: Date.now(),
        };

        setMessages((prev) => [...prev, assistantMsg]);
        setTurnCount((prev) => prev + 1);
      } catch (error: any) {
        console.error('[Hotelly Mascote] Erro:', error?.message);

        const errorMsg: ChatMessage = {
          id: `error-${Date.now()}`,
          role: 'assistant',
          content: 'Ops, tive um problema técnico. Tenta de novo em alguns segundos? 🙏',
          timestamp: Date.now(),
        };
        setMessages((prev) => [...prev, errorMsg]);
      } finally {
        setIsLoading(false);
      }
    },
    [turnCount, messages],
  );

  const resetSession = useCallback(() => {
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
