import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAnalytics } from '../hooks/useAnalytics';

interface HeaderProps {
  onCtaClick?: () => void;
}

export default function Header({ onCtaClick }: HeaderProps) {
  const { trackConversion } = useAnalytics();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || !isHome ? 'bg-background/95 backdrop-blur-md border-b border-border py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link className="flex items-center hover:opacity-80 transition-opacity" to="/">
          <img alt="Hotelly — Central de Reservas" className="h-10 md:h-12 w-auto object-contain" src="/hotelly.webp?v=3" width="219" height="70" />
        </Link>
        <nav className="hidden md:flex items-center space-x-8 text-muted-foreground font-medium">
          {isHome ? (
            <>
              <a className="hover:text-primary transition-colors" href="#funcionalidades">Funcionalidades</a>
              <a className="hover:text-primary transition-colors" href="#planos">Planos</a>
              <a className="hover:text-primary transition-colors" href="#faq">FAQ</a>
            </>
          ) : (
            <Link className="hover:text-primary transition-colors" to="/">Voltar ao Início</Link>
          )}
          <Link className="hover:text-primary transition-colors" to="/blog">Blog</Link>
          <Link className="hover:text-primary transition-colors" to="/ajuda">Ajuda</Link>
        </nav>
        <div className="flex items-center gap-4">
          <span className="text-center block border border-border bg-card/20 text-muted-foreground font-bold py-2.5 px-4 sm:px-6 rounded-lg text-xs sm:text-sm md:text-base cursor-not-allowed select-none">
            Entrar
          </span>
          {onCtaClick ? (
            <button
              onClick={onCtaClick}
              className="text-center bg-primary-dark text-primary-foreground font-bold py-2.5 px-4 sm:px-6 rounded-lg text-xs sm:text-sm md:text-base hover:bg-primary-dark/90 transition-colors cursor-pointer"
            >
              Assinar
            </button>
          ) : (
            <div className="text-center bg-primary/50 text-primary-foreground font-bold py-2.5 px-4 sm:px-6 rounded-lg text-xs sm:text-sm md:text-base cursor-default select-none opacity-80">
              🚀 Lançamento em Breve
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
