import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Rocket, CalendarCheck, MessageCircle, Bot, DollarSign, BarChart3, Sparkles, Smartphone, Settings, BookOpen, HelpCircle, FileText, Users } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DocsSearch from '../components/docs/DocsSearch';
import { getCategories, type DocCategory } from '../utils/docs';
import { useEmbed } from '../hooks/useEmbed';

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  'primeiros-passos': Rocket,
  'reservas': CalendarCheck,
  'concierge-ia': MessageCircle,
  'copilot': Bot,
  'precificacao': DollarSign,
  'financeiro': BarChart3,
  'governanca': Sparkles,
  'checkin-digital': Smartphone,
  'configuracoes': Settings,
  'glossario': BookOpen,
  'faq': HelpCircle,
  'legal-compliance': FileText,
  'guias-por-perfil': Users,
};

export default function Docs() {
  const categories = getCategories();
  const isEmbed = useEmbed();

  return (
    <div className="min-h-screen flex flex-col bg-brand-navy">
      <Helmet>
        <title>Central de Ajuda | Hotelly</title>
        <meta name="description" content="Encontre guias, tutoriais e respostas para todas as suas dúvidas sobre o Hotelly — o PMS completo para pousadas e hotéis." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hotelly.com.br/ajuda" />
        <meta property="og:title" content="Central de Ajuda | Hotelly" />
        <meta property="og:description" content="Guias, tutoriais e respostas para todas as suas dúvidas sobre o Hotelly." />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content="Central de Ajuda | Hotelly" />
      </Helmet>

      {!isEmbed && <Header />}

      <main className={`flex-grow ${isEmbed ? 'pt-8' : 'pt-32'} pb-20 px-4 md:px-8`}>
        <div className="max-w-6xl mx-auto">
          {/* Title + Search */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Central de Ajuda
            </h1>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Encontre guias, tutoriais e respostas para usar o Hotelly da melhor forma.
            </p>
            <DocsSearch />
          </div>

          {/* Category grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {categories.map((cat: DocCategory) => {
              const Icon = CATEGORY_ICONS[cat.slug] || HelpCircle;
              return (
                <Link
                  key={cat.slug}
                  to={`/ajuda/${cat.slug}`}
                  className="group bg-brand-slate/30 border border-white/5 rounded-xl p-6 hover:border-brand-amber/50 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-amber/10 p-3 rounded-lg group-hover:bg-brand-amber/20 transition-colors">
                      <Icon className="w-6 h-6 text-brand-amber" />
                    </div>
                    <div>
                      <h2 className="text-white font-bold text-lg group-hover:text-brand-amber transition-colors">
                        {cat.label}
                      </h2>
                      <p className="text-white/40 text-sm mt-1">
                        {cat.count} {cat.count === 1 ? 'artigo' : 'artigos'}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* CTA Ajuda */}
          <div className="mt-16 text-center">
            {isEmbed ? (
              <p className="text-white/50 text-sm">
                Não encontrou? Pergunte ao Copilot diretamente no dashboard.
              </p>
            ) : (
              <p className="text-white/50 text-sm">
                Não encontrou? Assinantes podem perguntar ao Copilot diretamente no dashboard.
              </p>
            )}
          </div>
        </div>
      </main>

      {!isEmbed && <Footer />}
    </div>
  );
}
