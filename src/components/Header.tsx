import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAnalytics } from '../hooks/useAnalytics';

export default function Header() {
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
              <a className="hover:text-primary transition-colors" href="#precos">Planos</a>
              <a className="hover:text-primary transition-colors" href="#faq">FAQ</a>
            </>
          ) : (
            <Link className="hover:text-primary transition-colors" to="/">Voltar ao Início</Link>
          )}
          <Link className="hover:text-primary transition-colors" to="/blog">Blog</Link>
          <Link className="hover:text-primary transition-colors" to="/ajuda">Ajuda</Link>
        </nav>
        <div className="flex items-center gap-4">
          <a className="text-center block border border-border-strong bg-card/50 text-foreground font-bold py-2.5 px-4 sm:px-6 rounded-lg hover:bg-popover transition-all text-xs sm:text-sm md:text-base" href="https://adm.hotelly.ia.br/sign-in">
            Entrar
          </a>
          <a className="text-center bg-primary hover:bg-primary-hover text-primary-foreground font-bold py-2.5 px-4 sm:px-6 rounded-lg transition-all text-xs sm:text-sm md:text-base shadow-lg shadow-primary/20" href="https://wa.me/5524993183300" onClick={() => trackConversion('header')}>
            Atendimento gratuito
          </a>
        </div>
      </div>
    </header>
  );
}
