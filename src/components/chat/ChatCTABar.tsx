import React from 'react';

interface ChatCTABarProps {
  variant: 'subtle' | 'prominent';
  onClose: () => void;
}

export default function ChatCTABar({ variant, onClose }: ChatCTABarProps) {
  const handleBackToSite = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onClose();
  };

  return (
    <div className="shrink-0 border-t border-border bg-background/80 px-4 py-2 backdrop-blur-sm">
      <button
        onClick={handleBackToSite}
        className="block w-full text-center text-xs text-foreground/40 transition-colors hover:text-muted-foreground"
      >
        Voltar ao site
      </button>
    </div>
  );
}

