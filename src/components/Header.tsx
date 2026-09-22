import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { useAnalytics } from '../hooks/useAnalytics';
import { WHATSAPP_URL, APP_LOGIN_URL, NAV_LINKS } from '../lib/site';

export default function Header() {
  const { trackWhatsAppClick } = useAnalytics();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const solid = scrolled || !isHome || menuOpen;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color,padding] duration-300 ${
        solid ? 'glass border-b border-border py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between gap-6">
        <Link className="flex items-center shrink-0 hover:opacity-85 transition-opacity" to="/" aria-label="Hotelly, página inicial">
          <picture>
            <source srcSet="/hotelly-logo.webp" type="image/webp" />
            <img alt="Hotelly" className="h-7 md:h-8 w-auto" src="/hotelly-logo.png" width="563" height="170" decoding="async" />
          </picture>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground" aria-label="Seções da página">
          {isHome ? (
            NAV_LINKS.map((l) => (
              <a key={l.href} className="hover:text-foreground transition-colors" href={l.href}>
                {l.label}
              </a>
            ))
          ) : (
            <Link className="hover:text-foreground transition-colors" to="/">Voltar ao início</Link>
          )}
        </nav>

        {/* Ações desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={APP_LOGIN_URL}
            className="text-sm font-medium text-muted-foreground hover:text-foreground border border-border-strong hover:border-primary/60 rounded-lg px-4 py-2 transition-colors"
          >
            Entrar
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            onClick={() => trackWhatsAppClick('header')}
            className="inline-flex items-center gap-2 text-sm font-semibold bg-brass hover:bg-brass-hover text-brass-foreground rounded-lg px-4 py-2 transition-colors"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            Falar no WhatsApp
          </a>
        </div>

        {/* Hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-muted-foreground hover:text-foreground hover:bg-card transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div id="menu-mobile" className="md:hidden border-t border-border px-5 py-5 flex flex-col gap-4">
          <nav className="flex flex-col gap-3 text-base font-medium text-muted-foreground">
            {isHome ? (
              NAV_LINKS.map((l) => (
                <a key={l.href} className="py-1 hover:text-foreground" href={l.href} onClick={() => setMenuOpen(false)}>
                  {l.label}
                </a>
              ))
            ) : (
              <Link className="py-1 hover:text-foreground" to="/" onClick={() => setMenuOpen(false)}>Voltar ao início</Link>
            )}
          </nav>
          <div className="flex flex-col gap-3 pt-3 border-t border-border">
            <a href={APP_LOGIN_URL} className="text-center text-sm font-medium border border-border-strong rounded-lg py-3">Entrar</a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              onClick={() => trackWhatsAppClick('header_mobile')}
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold bg-brass text-brass-foreground rounded-lg py-3"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
