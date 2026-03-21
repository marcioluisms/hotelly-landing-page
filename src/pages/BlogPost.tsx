import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Helmet } from 'react-helmet-async';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { getPostBySlug, getRelatedPosts } from '../utils/blog';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) return <Navigate to="/blog" />;
  
  const post = getPostBySlug(slug);
  
  if (!post) return <Navigate to="/blog" />;

  const relatedPosts = getRelatedPosts(post.relatedPosts);
  const dateModified = post.lastUpdated || post.date;

  // The URL of the current page (assuming the domain is hotelly.com.br, replace with actual domain later)
  const postUrl = `https://hotelly.com.br/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": `https://hotelly.com.br${post.coverImage}`,
    "datePublished": post.date,
    "dateModified": dateModified,
    "author": {
      "@type": "Person",
      "name": post.author.name
    },
    "publisher": {
      "@type": "Organization",
      "name": "Hotelly",
      "logo": {
        "@type": "ImageObject",
        "url": "https://hotelly.com.br/hotelly.png"
      }
    }
  };

  useDocumentTitle(`${post.title} | Blog Hotelly`);

  return (
    <div className="min-h-screen flex flex-col bg-brand-navy">
      <Helmet>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(', ')} />
        
        {/* Open Graph / Facebook / LinkedIn */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={postUrl} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.coverImage} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={postUrl} />
        <meta property="twitter:title" content={post.title} />
        <meta property="twitter:description" content={post.excerpt} />
        <meta property="twitter:image" content={post.coverImage} />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <Header />
      
      <main className="flex-grow pt-32 pb-20 px-4 md:px-8">
        <article className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-12 text-center">
            <div className="mb-6 flex justify-center space-x-4 text-sm font-medium text-brand-amber">
              <span>{post.category}</span>
              <span className="text-white/30">•</span>
              <time dateTime={post.date} className="text-white/60">
                {new Date(post.date).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric'
                })}
              </time>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-center mb-12">
              <img 
                src={post.author.avatar} 
                alt={post.author.name}
                className="w-12 h-12 rounded-full mr-4 border-2 border-brand-amber/20"
                referrerPolicy="no-referrer"
              />
              <div className="text-left">
                <p className="text-white font-medium">{post.author.name}</p>
                <p className="text-white/50 text-sm">Autor</p>
              </div>
            </div>
            
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/50 mb-16">
              <img 
                src={post.coverImage} 
                alt={post.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-invert prose-lg prose-amber max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
          
          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map(tag => (
                <span key={tag} className="bg-white/5 text-white/70 px-3 py-1 rounded-full text-sm">
                  #{tag}
                </span>
              ))}
            </div>

            {relatedPosts.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-6">Leia também</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedPosts.map(rp => (
                    <Link 
                      key={rp.slug} 
                      to={`/blog/${rp.slug}`}
                      className="group bg-brand-slate/30 border border-white/5 rounded-xl overflow-hidden hover:border-brand-amber/50 transition-all flex flex-col"
                    >
                      <div className="aspect-video w-full overflow-hidden relative">
                        <img 
                          src={rp.coverImage} 
                          alt={rp.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-4 flex flex-col flex-grow">
                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-brand-amber transition-colors line-clamp-2">
                          {rp.title}
                        </h4>
                        <p className="text-white/60 text-sm line-clamp-2">
                          {rp.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex justify-between items-center bg-brand-slate/30 p-8 rounded-2xl border border-white/5">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Gostou do artigo?</h3>
                <p className="text-white/60">Compartilhe com sua equipe e comece a transformar as vendas do seu hotel.</p>
              </div>
              <Link 
                to="/blog"
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-medium transition-colors"
              >
                Ver mais artigos
              </Link>
            </div>
          </footer>
        </article>
      </main>

      <Footer />
    </div>
  );
}
