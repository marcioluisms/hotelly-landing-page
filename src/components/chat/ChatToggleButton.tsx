import { X } from 'lucide-react';
import { motion } from 'motion/react';

interface ChatToggleButtonProps {
  isOpen: boolean;
  onClick: () => void;
  hasUnread: boolean;
}

export default function ChatToggleButton({ isOpen, onClick, hasUnread }: ChatToggleButtonProps) {
  if (isOpen) {
    return (
      <button
        onClick={onClick}
        aria-label="Fechar chat"
        aria-expanded={true}
        className="fixed bottom-5 right-5 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-white/10 shadow-lg shadow-black/20 transition-all duration-300 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-brand-sky focus:ring-offset-2 focus:ring-offset-brand-navy md:flex md:bottom-6 md:right-6"
      >
        <X size={24} className="text-white" />
      </button>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      aria-label="Abrir chat com o assistente Hotelly"
      aria-expanded={false}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 3 }}
      className="fixed bottom-5 right-5 z-50 flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-full bg-brand-navy shadow-lg shadow-black/30 transition-all duration-300 hover:shadow-xl hover:shadow-black/40 focus:outline-none focus:ring-2 focus:ring-brand-sky focus:ring-offset-2 focus:ring-offset-brand-navy md:bottom-6 md:right-6 md:h-14 md:w-14"
    >
      <img src="/icon.png" alt="Hotelly" className="h-full w-full object-cover" />
      {hasUnread && (
        <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-coral opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-brand-coral" />
        </span>
      )}
    </motion.button>
  );
}
