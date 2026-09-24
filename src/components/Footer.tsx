import { Link } from "react-router-dom";
import { home } from "../data/home";
import { APP_LOGIN_URL, SITE_SAZAO, WHATSAPP_URL } from "../lib/site";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="page-container py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <Link
              to="/"
              aria-label="Hotelly, página inicial"
              className="inline-block hover:opacity-85 transition-opacity"
            >
              <picture>
                <source srcSet="/hotelly-logo.webp" type="image/webp" />
                <img
                  src="/hotelly-logo.png"
                  alt="Hotelly"
                  width="563"
                  height="170"
                  loading="lazy"
                  className="h-8 w-auto"
                />
              </picture>
            </Link>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              {home.footer.description}
            </p>
          </div>
          <nav aria-label="Rodapé">
            <ul className="flex flex-wrap gap-x-6 gap-y-4 text-xs text-muted-foreground">
              <li><a className="inline-flex items-center min-h-11 hover:text-foreground" href="#servico">Serviço integrado</a></li>
              <li>
                <a
                  href="#funcionalidades"
                  className="inline-flex items-center min-h-11 hover:text-foreground"
                >
                  O produto
                </a>
              </li>
              <li>
                <a
                  href="#duvidas"
                  className="inline-flex items-center min-h-11 hover:text-foreground"
                >
                  Dúvidas
                </a>
              </li>
              <li>
                <a
                  title="Acesso para quem já recebeu credenciais." href={APP_LOGIN_URL}
                  className="inline-flex items-center min-h-11 hover:text-foreground"
                >
                  Já tenho acesso
                </a>
              </li>
              <li>
                <a
                  aria-label="Conversar com a Sazão pelo WhatsApp — abrir em nova aba" href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center min-h-11 hover:text-foreground"
                >
                  Conversar com a Sazão
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <p className="mt-10 pt-6 border-t border-border text-xs leading-relaxed text-muted-foreground">
          O Hotelly é um produto da{" "}
          <a
            href={SITE_SAZAO}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-brass underline underline-offset-4 decoration-border-strong"
          >
            Sazão — Gestão e marketing para hospedagens
          </a>
          {" "}e integra sua proposta de acompanhamento personalizado da gestão. Não há contratação de licença avulsa.
        </p>
      </div>
    </footer>
  );
}
