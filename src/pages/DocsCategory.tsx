import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DocsSidebar from '../components/docs/DocsSidebar';
import DocsBreadcrumb from '../components/docs/DocsBreadcrumb';
import { getDocsByCategory, getCategories } from '../utils/docs';
import { useEmbed } from '../hooks/useEmbed';

const TYPE_BADGES: Record<string, { label: string; color: string }> = {
  'como-fazer': { label: 'Como fazer', color: 'bg-brand-amber/20 text-brand-amber' },
  'conceito': { label: 'Conceito', color: 'bg-brand-sky/20 text-brand-sky' },
  'troubleshooting': { label: 'Solução', color: 'bg-red-500/20 text-red-400' },
  'guia': { label: 'Guia', color: 'bg-brand-emerald/20 text-brand-emerald' },
};

export default function DocsCategory() {
  const { categoria } = useParams<{ categoria: string }>();
  const [perfilFilter, setPerfilFilter] = useState<string>('');

  if (!categoria) return <Navigate to="/ajuda" />;

  const categories = getCategories();
  const currentCat = categories.find((c) => c.slug === categoria);

  if (!currentCat) return <Navigate to="/ajuda" />;

  let docs = getDocsByCategory(categoria);

  // Collect unique perfis for filter
  const allPerfis = Array.from(new Set(docs.flatMap((d) => d.perfil))).sort();

  if (perfilFilter) {
    docs = docs.filter((d) => d.perfil.includes(perfilFilter));
  }

  const isEmbed = useEmbed();

  useDocumentTitle(`${currentCat.label} | Ajuda Hotelly`);

  return (
    <div className="min-h-screen flex flex-col bg-brand-navy">
      <Helmet>
        <meta name="description" content={`Artigos de ajuda sobre ${currentCat.label} no Hotelly.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://hotelly.com.br/ajuda/${categoria}`} />
        <meta property="og:title" content={`${currentCat.label} | Ajuda Hotelly`} />
      </Helmet>

      {!isEmbed && <Header />}

      <main className={`flex-grow ${isEmbed ? 'pt-8' : 'pt-32'} pb-20 px-4 md:px-8`}>
        <div className="max-w-7xl mx-auto flex gap-8">
          {/* Sidebar */}
          {!isEmbed && <DocsSidebar />}

          {/* Content */}
          <div className="flex-grow min-w-0">
            {!isEmbed && <DocsBreadcrumb categorySlug={categoria} categoryLabel={currentCat.label} />}

            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
              <h1 className="text-3xl md:text-4xl font-black text-white">
                {currentCat.label}
              </h1>

              {allPerfis.length > 1 && (
                <select
                  value={perfilFilter}
                  onChange={(e) => setPerfilFilter(e.target.value)}
                  className="bg-brand-slate/50 border border-white/10 rounded-lg px-3 py-2 text-sm text-white/80 focus:outline-none focus:border-brand-amber/50"
                >
                  <option value="">Todos os perfis</option>
                  {allPerfis.map((p) => (
                    <option key={p} value={p}>
                      {p.charAt(0).toUpperCase() + p.slice(1).replace('_', ' ')}
                    </option>
                  ))}
                </select>
              )}
            </div>

            <div className="space-y-3">
              {docs.map((doc) => {
                const badge = TYPE_BADGES[doc.tipo] || TYPE_BADGES['conceito'];
                return (
                  <Link
                    key={doc.slug}
                    to={`/ajuda/${categoria}/${doc.slug}`}
                    className="block bg-brand-slate/20 border border-white/5 rounded-xl p-5 hover:border-brand-amber/30 transition-all group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <h2 className="text-white font-bold text-lg group-hover:text-brand-amber transition-colors line-clamp-1">
                          {doc.titulo}
                        </h2>
                        {doc.descricao && (
                          <p className="text-white/50 text-sm mt-1 line-clamp-2">{doc.descricao}</p>
                        )}
                        <div className="flex items-center gap-2 mt-3 flex-wrap">
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${badge.color}`}>
                            {badge.label}
                          </span>
                          {doc.perfil.map((p) => (
                            <span key={p} className="text-xs text-white/30 bg-white/5 px-2 py-0.5 rounded-full">
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}

              {docs.length === 0 && (
                <p className="text-white/40 text-center py-12">
                  Nenhum artigo encontrado{perfilFilter ? ' para este perfil' : ''}.
                </p>
              )}
            </div>
          </div>
        </div>
      </main>

      {!isEmbed && <Footer />}
    </div>
  );
}
