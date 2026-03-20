import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 text-center md:text-left">
          <div>
            <Link to="/" className="inline-block hover:opacity-80 transition-opacity">
              <img alt="Hotelly Logo" className="h-12 w-auto mb-2 mx-auto md:mx-0" src="/hotelly.png?v=3" />
            </Link>
            <p className="text-white/40 max-w-sm">Vendas Diretas. Gestão Completa.</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <a className="bg-brand-amber text-brand-navy font-black py-2.5 px-6 rounded-lg hover:bg-amber-500 transition-all shadow-lg shadow-brand-amber/20" href="https://adm.hotelly.ia.br/sign-up?utm_source=landing_page&utm_medium=cta&utm_content=preco_inauguracao">
              Garantir Preço de Inauguração
            </a>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/40 gap-4">
          <p>© 2026 Hotelly. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link className="hover:text-white transition-colors" to="/blog">Blog</Link>
            <Link className="hover:text-white transition-colors" to="/ajuda">Ajuda</Link>
            <Link className="hover:text-white transition-colors" to="/termos">Termos de Uso</Link>
            <Link className="hover:text-white transition-colors" to="/privacidade">Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
