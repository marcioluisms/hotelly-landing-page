import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || !isHome ? 'bg-brand-navy/95 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link className="flex items-center hover:opacity-80 transition-opacity" to="/">
          <img alt="Hotelly Logo" className="h-10 md:h-12 w-auto object-contain" src="/hotelly.png?v=3" />
        </Link>
        <nav className="hidden md:flex items-center space-x-8 text-white/90 font-medium">
          {isHome ? (
            <>
              <a className="hover:text-brand-sky transition-colors" href="#funcionalidades">Funcionalidades</a>
              <a className="hover:text-brand-sky transition-colors" href="#precos">Planos</a>
              <a className="hover:text-brand-sky transition-colors" href="#faq">FAQ</a>
            </>
          ) : (
            <Link className="hover:text-brand-sky transition-colors" to="/">Voltar ao Início</Link>
          )}
          <Link className="hover:text-brand-sky transition-colors" to="/blog">Blog</Link>
        </nav>
        <div className="flex items-center gap-4">
          <a className="text-white/90 hover:text-brand-sky transition-colors font-medium text-xs sm:text-sm md:text-base" href="https://adm.hotelly.ia.br/sign-in">
            Entrar
          </a>
          <a className="bg-brand-amber hover:bg-amber-500 text-brand-navy font-bold py-2.5 px-4 sm:px-6 rounded-lg transition-all text-xs sm:text-sm md:text-base shadow-lg shadow-brand-amber/20" href="https://adm.hotelly.ia.br/sign-up?utm_source=landing_page&utm_medium=cta&utm_content=preco_inauguracao">
            Garantir Preço de Inauguração
          </a>
        </div>
      </div>
    </header>
  );
}
