import { X } from 'lucide-react';

interface ChatHeaderProps {
  onClose: () => void;
  onReset: () => void;
  turnCount: number;
}

export default function ChatHeader({ onClose, onReset, turnCount }: ChatHeaderProps) {
  return (
    <div className="flex shrink-0 items-center justify-between border-b border-white/10 bg-brand-navy px-4 py-3">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full">
          <img src="/icon.png" alt="Hotelly" className="h-full w-full object-cover" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-white">Hotelly</span>
          <span className="rounded bg-brand-sky/20 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-sky">
            IA
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {turnCount >= 5 && (
          <button
            onClick={onReset}
            aria-label="Iniciar nova conversa"
            className="rounded px-2 py-1 text-xs text-white/40 transition-colors hover:bg-white/5 hover:text-white/70 focus:outline-none focus:ring-1 focus:ring-brand-sky"
          >
            Nova conversa
          </button>
        )}
        <button
          onClick={onClose}
          aria-label="Fechar chat"
          className="flex h-8 w-8 items-center justify-center rounded-lg text-white/40 transition-all hover:bg-white/10 hover:text-white focus:outline-none focus:ring-1 focus:ring-brand-sky"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
