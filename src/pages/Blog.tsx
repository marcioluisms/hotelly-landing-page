import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { getAllPosts } from '../utils/blog';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Blog() {
  const posts = getAllPosts();

  useDocumentTitle('Blog Hotelly | Vendas Diretas e Gestão Hoteleira');

  return (
    <div className="min-h-screen flex flex-col bg-brand-navy">
      <Helmet>
        <meta name="description" content="Estratégias, tecnologia e insights para revolucionar a gestão e as vendas diretas do seu hotel ou pousada." />
        <meta property="og:title" content="Blog Hotelly | Vendas Diretas e Gestão Hoteleira" />
        <meta property="og:description" content="Estratégias, tecnologia e insights para revolucionar a gestão e as vendas diretas do seu hotel ou pousada." />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header />
      
      <main className="flex-grow pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Blog do <span className="text-brand-amber">Hotelly</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Estratégias, tecnologia e insights para revolucionar a gestão e as vendas diretas do seu hotel ou pousada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link 
                key={post.slug} 
                to={`/blog/${post.slug}`}
                className="group bg-brand-slate/50 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-amber/50 transition-all hover:-translate-y-1 flex flex-col"
              >
                <div className="aspect-video w-full overflow-hidden relative">
                  <img 
                    src={post.coverImage} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-brand-amber text-brand-navy text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-white/50 text-sm mb-4">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </time>
                  </div>
                  
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-brand-amber transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-white/70 mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center mt-auto pt-4 border-t border-white/10">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full mr-3"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-sm font-medium text-white/90">{post.author.name}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
