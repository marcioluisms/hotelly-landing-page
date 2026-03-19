import type { ChatMessage as ChatMessageType } from './types';

interface ChatMessageProps {
  message: ChatMessageType;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isAssistant = message.role === 'assistant';

  return (
    <div
      className={`flex items-end gap-2 max-w-[85%] ${
        isAssistant ? 'self-start' : 'self-end flex-row-reverse'
      }`}
      role="article"
      aria-label={isAssistant ? 'Hotelly disse' : 'Voce disse'}
    >
      {isAssistant && (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-amber">
          <img src="/icon.png" alt="" className="h-5 w-5 object-contain" aria-hidden="true" />
        </div>
      )}
      <div
        className={`rounded-2xl px-4 py-3 text-sm leading-relaxed break-words overflow-hidden ${
          isAssistant
            ? 'rounded-bl-sm border border-white/5 bg-brand-slate text-white/90'
            : 'rounded-br-sm bg-brand-amber/90 font-medium text-brand-navy'
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}
