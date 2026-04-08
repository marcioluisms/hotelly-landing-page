import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAnalytics } from '../hooks/useAnalytics';

interface HeaderProps {
  onCtaClick?: () => void;
}

export default function Header({ onCtaClick }: HeaderProps) {
  const { trackConversion } = useAnalytics();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fecha o menu ao navegar
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || !isHome ? 'bg-background/95 backdrop-blur-md border-b border-border py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link className="flex items-center hover:opacity-80 transition-opacity" to="/">
          <img alt="Hotelly — Central de Reservas" className="h-10 md:h-12 w-auto object-contain" src="/hotelly.webp?v=3" width="219" height="70" />
        </Link>

        {/* Nav desktop */}
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

        {/* Botões desktop */}
        <div className="hidden md:flex items-center gap-4">
          <span className="text-center block border border-border bg-card/20 text-muted-foreground font-bold py-2.5 px-6 rounded-lg text-sm cursor-not-allowed select-none">
            Entrar
          </span>
          <div className="text-center bg-primary/50 text-primary-foreground font-bold py-2.5 px-6 rounded-lg text-sm cursor-default select-none opacity-80">
            🚀 Lançamento em Breve
          </div>
        </div>

        {/* Botão hamburger mobile */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-muted-foreground hover:text-foreground hover:bg-card transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-b border-border px-4 py-6 flex flex-col gap-4">
          <nav className="flex flex-col gap-4 text-muted-foreground font-medium text-base">
            {isHome ? (
              <>
                <a className="hover:text-primary transition-colors py-1" href="#funcionalidades" onClick={() => setMenuOpen(false)}>Funcionalidades</a>
                <a className="hover:text-primary transition-colors py-1" href="#planos" onClick={() => setMenuOpen(false)}>Planos</a>
                <a className="hover:text-primary transition-colors py-1" href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
              </>
            ) : (
              <Link className="hover:text-primary transition-colors py-1" to="/" onClick={() => setMenuOpen(false)}>Voltar ao Início</Link>
            )}
            <Link className="hover:text-primary transition-colors py-1" to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
            <Link className="hover:text-primary transition-colors py-1" to="/ajuda" onClick={() => setMenuOpen(false)}>Ajuda</Link>
          </nav>
          <div className="flex flex-col gap-3 pt-2 border-t border-border">
            <span className="text-center block border border-border bg-card/20 text-muted-foreground font-bold py-3 px-6 rounded-lg text-sm cursor-not-allowed select-none">
              Entrar
            </span>
            <div className="text-center bg-primary/50 text-primary-foreground font-bold py-3 px-6 rounded-lg text-sm cursor-default select-none opacity-80">
              🚀 Lançamento em Breve
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
