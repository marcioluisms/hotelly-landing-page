import { Link } from 'react-router-dom';
import { home } from '../data/home';
import { APP_LOGIN_URL, SITE_SAZAO, WHATSAPP_URL } from '../lib/site';

export default function Footer() {
  return <footer className="bg-background border-t border-border">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        <div>
          <Link to="/" aria-label="Hotelly, página inicial" className="inline-block hover:opacity-85 transition-opacity">
            <picture><source srcSet="/hotelly-logo.webp" type="image/webp" /><img src="/hotelly-logo.png" alt="Hotelly" width="563" height="170" loading="lazy" className="h-8 w-auto" /></picture>
          </Link>
          <p className="mt-4 text-muted-foreground">{home.footer.description}</p>
        </div>
        <nav aria-label="Rodapé">
          <ul className="flex flex-wrap gap-x-6 gap-y-4 text-sm text-muted-foreground">
            <li><a href="#funcionalidades" className="hover:text-foreground">Funcionalidades</a></li>
            <li><a href="#duvidas" className="hover:text-foreground">Dúvidas</a></li>
            <li><a href={APP_LOGIN_URL} className="hover:text-foreground">Entrar</a></li>
            <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">WhatsApp</a></li>
          </ul>
        </nav>
      </div>
      <p className="mt-10 pt-6 border-t border-border text-sm text-muted-foreground">O Hotelly é um produto da <a href={SITE_SAZAO} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-brass underline underline-offset-4 decoration-border-strong">Sazão - Gestão Inteligente de Hospedagens</a>.</p>
    </div>
  </footer>;
}
