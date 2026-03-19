import { CTA_SIGNUP_URL } from './chatConfig';

interface ChatCTABarProps {
  variant: 'subtle' | 'prominent';
  onClose: () => void;
}

export default function ChatCTABar({ variant, onClose }: ChatCTABarProps) {
  const handleBackToSite = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onClose();
  };

  if (variant === 'prominent') {
    return (
      <div className="shrink-0 border-t border-brand-amber/20 bg-gradient-to-r from-brand-amber/10 to-brand-amber/5 px-4 py-3">
        <a
          href={CTA_SIGNUP_URL}
          className="block w-full rounded-lg bg-brand-amber py-2.5 px-4 text-center text-sm font-bold text-brand-navy shadow-lg shadow-brand-amber/20 transition-all duration-200 hover:bg-amber-500"
        >
          Comecar teste gratis de 14 dias
        </a>
        <button
          onClick={handleBackToSite}
          className="mt-2 block w-full text-center text-xs text-white/40 transition-colors hover:text-white/60"
        >
          Ou voltar ao site
        </button>
      </div>
    );
  }

  return (
    <div className="shrink-0 border-t border-white/5 bg-brand-navy/80 px-4 py-2 backdrop-blur-sm">
      <a
        href={CTA_SIGNUP_URL}
        className="block w-full rounded-lg border border-brand-amber/30 bg-brand-amber/10 px-3 py-2 text-center text-xs font-medium text-brand-amber transition-all duration-200 hover:bg-brand-amber/20"
      >
        Comecar teste gratis
      </a>
      <button
        onClick={handleBackToSite}
        className="mt-1.5 block w-full text-center text-[10px] text-white/30 transition-colors hover:text-white/50"
      >
        Voltar ao site
      </button>
    </div>
  );
}
