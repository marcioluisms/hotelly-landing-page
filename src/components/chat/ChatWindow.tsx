import { useEffect, useMemo } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import ChatHeader from './ChatHeader';
import ChatMessageList from './ChatMessageList';
import ChatInput from './ChatInput';
import ChatCTABar from './ChatCTABar';
import type { ChatMessage } from './types';

interface ChatWindowProps {
  isOpen: boolean;
  messages: ChatMessage[];
  isLoading: boolean;
  turnCount: number;
  maxTurns: number;
  maxInputLength: number;
  onSend: (text: string) => void;
  onClose: () => void;
  onReset: () => void;
}

const CTA_KEYWORDS = /teste gr[aá]tis|criar sua conta|14 dias/i;

export default function ChatWindow({
  isOpen,
  messages,
  isLoading,
  turnCount,
  maxTurns,
  maxInputLength,
  onSend,
  onClose,
  onReset,
}: ChatWindowProps) {
  const isMaxReached = turnCount >= maxTurns;

  // Determine CTA variant based on last assistant message content or max turns
  const ctaVariant = useMemo(() => {
    if (isMaxReached) return 'prominent' as const;
    const lastAssistant = [...messages].reverse().find((m) => m.role === 'assistant');
    if (lastAssistant && CTA_KEYWORDS.test(lastAssistant.content)) return 'prominent' as const;
    return 'subtle' as const;
  }, [messages, isMaxReached]);

  // Escape to close
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll on mobile when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Desktop panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            style={{ transformOrigin: 'bottom right' }}
            className="fixed bottom-22 right-6 z-50 hidden h-[600px] w-[400px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-background shadow-2xl shadow-black/40 md:flex"
            id="hotelly-chat-panel"
            role="dialog"
            aria-label="Chat com o assistente Hotelly"
          >
            <ChatHeader onClose={onClose} onReset={onReset} turnCount={turnCount} />
            <ChatMessageList messages={messages} isLoading={isLoading} onSend={onSend} />
            <ChatCTABar variant={ctaVariant} onClose={onClose} />
            {isMaxReached ? (
              <div className="shrink-0 border-t border-white/10 px-4 py-3 text-center text-sm text-slate-400">
                Sessao encerrada.{' '}
                <button onClick={onReset} className="text-brand-amber hover:underline">
                  Iniciar nova conversa
                </button>
              </div>
            ) : (
              <ChatInput onSend={onSend} disabled={isLoading} maxLength={maxInputLength} />
            )}
          </motion.div>

          {/* Mobile panel (fullscreen) */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{
              paddingTop: 'env(safe-area-inset-top)',
              paddingBottom: 'env(safe-area-inset-bottom)',
            }}
            className="fixed inset-0 z-50 flex flex-col overflow-hidden bg-background md:hidden"
            id="hotelly-chat-panel-mobile"
            role="dialog"
            aria-label="Chat com o assistente Hotelly"
            aria-modal="true"
          >
            <ChatHeader onClose={onClose} onReset={onReset} turnCount={turnCount} />
            <ChatMessageList messages={messages} isLoading={isLoading} onSend={onSend} />
            <ChatCTABar variant={ctaVariant} onClose={onClose} />
            {isMaxReached ? (
              <div className="shrink-0 border-t border-white/10 px-4 py-3 text-center text-sm text-slate-400">
                Sessao encerrada.{' '}
                <button onClick={onReset} className="text-brand-amber hover:underline">
                  Iniciar nova conversa
                </button>
              </div>
            ) : (
              <ChatInput onSend={onSend} disabled={isLoading} maxLength={maxInputLength} />
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
