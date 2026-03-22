import React, { useEffect, useRef, useCallback } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Helmet } from 'react-helmet-async';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DocsSidebar from '../components/docs/DocsSidebar';
import DocsBreadcrumb from '../components/docs/DocsBreadcrumb';
import { getDocBySlug, getRelatedDocs, getCategories } from '../utils/docs';
import { useEmbed } from '../hooks/useEmbed';

const CATEGORY_LABELS: Record<string, string> = {
  'primeiros-passos': 'Primeiros Passos',
  'reservas': 'Reservas',
  'concierge-ia': 'Concierge IA',
  'copilot': 'Copilot',
  'precificacao': 'Precificação',
  'financeiro': 'Financeiro',
  'governanca': 'Governança',
  'checkin-digital': 'Check-in Digital',
  'configuracoes': 'Configurações',
  'glossario': 'Glossário',
  'faq': 'FAQ',
  'legal-compliance': 'Legal / Compliance',
  'guias-por-perfil': 'Guias por Perfil',
};

/** Build a valid article ID from category + slug */
function buildArticleId(categoria: string, slug: string): string {
  return `${categoria}_${slug}`.slice(0, 64);
}

const PARENT_ORIGIN = 'https://adm.hotelly.ia.br';

export default function DocsArticle() {
  const { categoria, slug } = useParams<{ categoria: string; slug: string }>();
  const isEmbed = useEmbed();
  const contentRef = useRef<HTMLDivElement>(null);

  const doc = categoria && slug ? getDocBySlug(categoria, slug) : null;

  const sendToParent = useCallback((msg: Record<string, unknown>) => {
    if (!isEmbed) return;
    window.parent.postMessage(msg, PARENT_ORIGIN);
  }, [isEmbed]);

  // Notify parent about article changes
  useEffect(() => {
    if (!isEmbed || !categoria || !slug || !doc) return;
    sendToParent({
      type: 'hotelly:help:articleChanged',
      payload: {
        helpArticleId: buildArticleId(categoria, slug),
        articleTitle: doc.titulo.slice(0, 200),
        articleUrl: `/ajuda/${categoria}/${slug}`,
      },
    });
  }, [isEmbed, categoria, slug, doc, sendToParent]);

  // Report content height to parent for dynamic iframe sizing
  useEffect(() => {
    if (!isEmbed || !contentRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        sendToParent({
          type: 'hotelly:help:contentResized',
          payload: { height: Math.ceil(entry.contentRect.height) },
        });
      }
    });
    observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, [isEmbed, sendToParent]);

  if (!categoria || !slug) return <Navigate to="/ajuda" />;
  if (!doc) return <Navigate to={`/ajuda/${categoria}`} />;

  const categoryLabel = CATEGORY_LABELS[categoria] || categoria;
  const relatedDocs = getRelatedDocs(categoria, slug);
  const articleUrl = `https://hotelly.com.br/ajuda/${categoria}/${slug}`;
  const description = doc.descricao || doc.content.slice(0, 160).replace(/[#*>\n]/g, '').trim();

  const handleOpenCopilot = () => {
    sendToParent({
      type: 'hotelly:help:openCopilot',
      payload: {
        helpArticleId: buildArticleId(categoria, slug),
        articleTitle: doc.titulo.slice(0, 200),
      },
    });
  };

  // JSON-LD: HowTo for "como-fazer", Article for everything else
  const jsonLd = doc.tipo === 'como-fazer'
    ? {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': doc.titulo,
        'description': description,
        'publisher': {
          '@type': 'Organization',
          'name': 'Hotelly',
          'logo': { '@type': 'ImageObject', 'url': 'https://hotelly.com.br/hotelly.png' },
        },
      }
    : {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': doc.titulo,
        'description': description,
        'author': { '@type': 'Organization', 'name': 'Hotelly' },
        'publisher': {
          '@type': 'Organization',
          'name': 'Hotelly',
          'logo': { '@type': 'ImageObject', 'url': 'https://hotelly.com.br/hotelly.png' },
        },
      };

  useDocumentTitle(`${doc.titulo} | Ajuda Hotelly`);

  return (
    <div ref={contentRef} className="min-h-screen flex flex-col bg-brand-navy">
      <Helmet>
        <meta name="description" content={description} />

        <meta property="og:type" content="article" />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:title" content={doc.titulo} />
        <meta property="og:description" content={description} />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content={articleUrl} />
        <meta property="twitter:title" content={doc.titulo} />
        <meta property="twitter:description" content={description} />

        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {!isEmbed && <Header />}

      <main className={`flex-grow ${isEmbed ? 'pt-8' : 'pt-32'} pb-20 px-4 md:px-8`}>
        <div className="max-w-7xl mx-auto flex gap-8">
          {/* Sidebar */}
          {!isEmbed && <DocsSidebar />}

          {/* Article */}
          <article className="flex-grow min-w-0 max-w-3xl">
            {!isEmbed && (
              <DocsBreadcrumb
                categorySlug={categoria}
                categoryLabel={categoryLabel}
              />
            )}

            <h1 className="text-3xl md:text-4xl font-black text-white mb-8 leading-tight">
              {doc.titulo}
            </h1>

            {/* Content */}
            <div className="prose prose-invert prose-lg prose-amber max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {doc.content}
              </ReactMarkdown>
            </div>

            {/* Footer */}
            <footer className="mt-16 pt-8 border-t border-white/10">
              {/* Related docs */}
              {relatedDocs.length > 0 && (
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-white mb-4">Artigos relacionados</h3>
                  <div className="space-y-2">
                    {relatedDocs.map((rd) => (
                      <Link
                        key={rd.slug}
                        to={`/ajuda/${rd.categoria}/${rd.slug}`}
                        className="block bg-brand-slate/20 border border-white/5 rounded-lg px-4 py-3 hover:border-brand-amber/30 transition-all group"
                      >
                        <p className="text-white font-medium group-hover:text-brand-amber transition-colors">
                          {rd.titulo}
                        </p>
                        {rd.descricao && (
                          <p className="text-white/40 text-sm mt-0.5 line-clamp-1">{rd.descricao}</p>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Ajuda */}
              {isEmbed ? (
                <div className="bg-brand-slate/30 p-6 rounded-xl border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-white font-bold">Precisa de ajuda específica?</p>
                    <p className="text-white/50 text-sm">O Copilot pode te ajudar com dados reais da sua propriedade.</p>
                  </div>
                  <button
                    onClick={handleOpenCopilot}
                    className="bg-brand-amber hover:bg-amber-500 text-brand-navy font-bold py-2.5 px-6 rounded-lg transition-all text-sm shadow-lg shadow-brand-amber/20 whitespace-nowrap"
                  >
                    Abrir Copilot &rarr;
                  </button>
                </div>
              ) : (
                <div className="bg-brand-slate/30 p-6 rounded-xl border border-white/5">
                  <p className="text-white font-bold mb-1">Ainda tem dúvidas?</p>
                  <p className="text-white/50 text-sm">
                    Assinantes contam com o Copilot, assistente inteligente do Hotelly, disponível diretamente no dashboard da sua hospedagem. Ele está lá para garantir que você aproveite tudo que a plataforma oferece — desde o primeiro acesso.
                  </p>
                </div>
              )}
            </footer>
          </article>
        </div>
      </main>

      {!isEmbed && <Footer />}
    </div>
  );
}
