import React from 'react';
import { Link } from 'react-router-dom';
import { useAnalytics } from '../hooks/useAnalytics';

interface FooterProps {
  onCtaClick?: () => void;
}

export default function Footer({ onCtaClick }: FooterProps) {
  const { trackConversion } = useAnalytics();
  return (
    <footer className="bg-background text-foreground pt-20 pb-10 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 text-center md:text-left">
          <div>
            <Link to="/" className="inline-block hover:opacity-80 transition-opacity">
              <img alt="Hotelly — Central de Reservas" className="h-12 w-auto mb-2 mx-auto md:mx-0" src="/hotelly.webp?v=3" width="219" height="70" />
            </Link>
            <p className="text-muted-foreground max-w-sm">Sua hospedagem funcionando. Você vivendo.</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            {onCtaClick ? (
              <button
                onClick={onCtaClick}
                className="text-center bg-primary-dark text-primary-foreground text-lg font-bold px-8 py-4 rounded-xl hover:bg-primary-dark/90 transition-colors cursor-pointer"
              >
                Começar →
              </button>
            ) : (
              <div className="text-center bg-primary/50 text-primary-foreground text-lg font-bold px-8 py-4 rounded-xl cursor-default select-none opacity-80">
                🚀 Lançamento em Breve
              </div>
            )}
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground gap-4">
          <p>© 2026 Hotelly. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link className="hover:text-foreground transition-colors" to="/blog">Blog</Link>
            <Link className="hover:text-foreground transition-colors" to="/ajuda">Ajuda</Link>
            <Link className="hover:text-foreground transition-colors" to="/termos">Termos de Uso</Link>
            <Link className="hover:text-foreground transition-colors" to="/privacidade">Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
