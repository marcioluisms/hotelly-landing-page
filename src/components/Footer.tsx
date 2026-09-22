import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SITE_SAZAO, APP_LOGIN_URL, NAV_LINKS } from '../lib/site';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Marca */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-block hover:opacity-85 transition-opacity" aria-label="Hotelly, página inicial">
              <picture>
                <source srcSet="/hotelly-logo.webp" type="image/webp" />
                <img alt="Hotelly" className="h-8 w-auto" src="/hotelly-logo.png" width="563" height="170" loading="lazy" decoding="async" />
              </picture>
            </Link>
            <p className="text-muted-foreground mt-4 max-w-sm">Sistema de gestão inteligente de hospedagens.</p>
          </div>

          {/* Links */}
          <div className="md:col-span-7 md:pl-8">
            <p className="eyebrow mb-4">Página</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {NAV_LINKS.map((l) => (
                <li key={l.href}><a className="hover:text-foreground transition-colors" href={`/${l.href}`}>{l.label}</a></li>
              ))}
              <li><a className="hover:text-foreground transition-colors" href={APP_LOGIN_URL}>Entrar</a></li>
            </ul>
          </div>
        </div>

        {/* Linha da Sazão */}
        <div className="mt-14 rounded-2xl border border-border bg-card px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-foreground">
            O Hotelly é o sistema central da <strong className="font-semibold">Sazão Gestão Hoteleira</strong>.
          </p>
          <a
            href={SITE_SAZAO}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brass hover:text-brass-hover transition-colors"
          >
            Conheça o modelo de gestão
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-xs text-muted-foreground flex flex-col sm:flex-row sm:justify-between gap-2">
          <p>© 2026 Hotelly. Todos os direitos reservados.</p>
          <p>Construído e operado pela Sazão Gestão Hoteleira.</p>
        </div>
      </div>
    </footer>
  );
}
