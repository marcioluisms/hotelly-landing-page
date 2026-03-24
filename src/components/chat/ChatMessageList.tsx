import { useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';
import type { ChatMessage as ChatMessageType } from './types';

const QUICK_QUESTIONS = [
  'Como funciona?',
  'Quanto custa?',
  'Tem teste gratis?',
  'Funciona pra pousada pequena?',
];

interface ChatMessageListProps {
  messages: ChatMessageType[];
  isLoading: boolean;
  onSend: (text: string) => void;
}

export default function ChatMessageList({ messages, isLoading, onSend }: ChatMessageListProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const showChips = messages.length === 1 && !isLoading;

  return (
    <div
      className="flex flex-1 flex-col space-y-4 overflow-y-auto overscroll-contain px-4 py-4 scroll-smooth"
      role="log"
      aria-label="Mensagens do chat"
      aria-live="polite"
    >
      {messages.map((msg) => (
        <ChatMessage key={msg.id} message={msg} />
      ))}

      {showChips && (
        <div className="ml-9 mt-1 flex flex-wrap gap-2">
          {QUICK_QUESTIONS.map((q) => (
            <button
              key={q}
              onClick={() => onSend(q)}
              className="cursor-pointer rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60 transition-all duration-200 hover:border-brand-sky/30 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-1 focus:ring-brand-sky"
            >
              {q}
            </button>
          ))}
        </div>
      )}

      {isLoading && (
        <div className="flex max-w-[85%] items-end gap-2 self-start" aria-label="Hotelly esta digitando" role="status">
          <div className="h-7 w-7 shrink-0 overflow-hidden rounded-full">
            <img src="/icon.webp" alt="" className="h-full w-full object-cover" aria-hidden="true" width="105" height="105" />
          </div>
          <div className="rounded-2xl rounded-bl-sm border border-white/5 bg-brand-slate px-4 py-3">
            <div className="flex h-5 items-center gap-1.5">
              <span className="typing-dot h-2 w-2 rounded-full bg-white/40" />
              <span className="typing-dot h-2 w-2 rounded-full bg-white/40" />
              <span className="typing-dot h-2 w-2 rounded-full bg-white/40" />
            </div>
          </div>
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
}
