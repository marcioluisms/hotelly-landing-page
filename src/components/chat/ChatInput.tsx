import { useState, useRef, useCallback } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSend: (text: string) => void;
  disabled: boolean;
  maxLength: number;
}

export default function ChatInput({ onSend, disabled, maxLength }: ChatInputProps) {
  const [text, setText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = useCallback(() => {
    const trimmed = text.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setText('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  }, [text, disabled, onSend]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    const el = e.target;
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 72) + 'px';
  };

  const hasText = text.trim().length > 0;

  return (
    <div className="shrink-0 border-t border-white/10 bg-background px-4 py-3">
      <div className="flex items-end gap-2 rounded-xl border border-white/10 bg-brand-slate/50 px-3 py-2 transition-all focus-within:border-brand-sky/40 focus-within:ring-1 focus-within:ring-brand-sky/20">
        <textarea
          ref={textareaRef}
          value={text}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          placeholder={disabled ? 'Limite de mensagens atingido' : 'Digite sua mensagem...'}
          maxLength={maxLength}
          disabled={disabled}
          rows={1}
          aria-label="Digite sua mensagem"
          className="flex-1 resize-none bg-transparent text-sm leading-relaxed text-white/90 outline-none placeholder:text-white/30 disabled:cursor-not-allowed disabled:opacity-50"
          style={{ minHeight: '20px', maxHeight: '72px' }}
        />
        <button
          onClick={handleSend}
          disabled={disabled || !hasText}
          aria-label="Enviar mensagem"
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-brand-sky ${
            hasText && !disabled
              ? 'bg-brand-amber text-brand-navy hover:bg-amber-500 active:bg-amber-600'
              : 'cursor-not-allowed bg-transparent text-white/20'
          }`}
        >
          <Send size={16} />
        </button>
      </div>
      {text.length > maxLength - 100 && (
        <div className="mt-1 flex justify-end">
          <span className={`text-[10px] ${text.length > maxLength - 20 ? 'text-brand-coral' : 'text-white/30'}`}>
            {text.length}/{maxLength}
          </span>
        </div>
      )}
    </div>
  );
}
