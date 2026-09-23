import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL, APP_LOGIN_URL, NAV_LINKS } from "../lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setMenuOpen(false), [location.pathname]);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color,padding] duration-300 ${scrolled || menuOpen ? "glass border-b border-border py-3" : "bg-transparent py-5"}`}
    >
      <div className="page-container flex items-center justify-between gap-5">
        <Link
          to="/"
          aria-label="Hotelly, página inicial"
          className="shrink-0 hover:opacity-85 transition-opacity"
        >
          <picture>
            <source srcSet="/hotelly-logo.webp" type="image/webp" />
            <img
              src="/hotelly-logo.png"
              alt="Hotelly"
              width="563"
              height="170"
              className="h-8 xl:h-9 w-auto"
            />
          </picture>
        </Link>
        <nav
          className="hidden xl:flex items-center gap-6 text-sm font-medium text-muted-foreground"
          aria-label="Seções da página"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex items-center min-h-11 hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden xl:flex items-center gap-3">
          <a
            href={APP_LOGIN_URL}
            className="inline-flex items-center min-h-11 text-xs text-muted-foreground hover:text-foreground rounded-lg px-4 py-2 transition-colors"
          >
            Entrar
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 min-h-11 text-xs font-semibold border border-brass/40 hover:bg-brass/10 text-brass rounded-md px-4 py-2.5 transition-colors"
          >
            Falar sobre o Hotelly
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
        <button
          id="menu-toggle"
          type="button"
          className="xl:hidden flex items-center justify-center w-11 h-11 rounded-lg hover:bg-card text-muted-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </div>
      {menuOpen && (
        <div
          id="menu-mobile"
          className="xl:hidden border-t border-border px-5 py-5 max-h-[calc(100dvh-5rem)] overflow-y-auto"
        >
          <nav
            className="flex flex-col gap-1 text-base font-medium text-muted-foreground"
            aria-label="Seções da página no celular"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3 pt-4 mt-3 border-t border-border">
            <a
              href={APP_LOGIN_URL}
              className="text-center text-sm font-medium border border-border-strong rounded-lg py-3"
            >
              Entrar
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold bg-brass text-brass-foreground rounded-lg py-3"
            >
              Falar sobre o Hotelly
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
