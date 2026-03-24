import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEmbed } from './hooks/useEmbed';

const Home = React.lazy(() => import('./pages/Home'));
const Termos = React.lazy(() => import('./pages/Termos'));
const Privacidade = React.lazy(() => import('./pages/Privacidade'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Docs = React.lazy(() => import('./pages/Docs'));
const DocsCategory = React.lazy(() => import('./pages/DocsCategory'));
const DocsArticle = React.lazy(() => import('./pages/DocsArticle'));

const ChatWidget = React.lazy(() => import('./components/chat/ChatWidget'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const isEmbed = useEmbed();
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    if (isEmbed) return;

    const initChat = () => {
      const loadChat = () => setShowChat(true);

      if ('requestIdleCallback' in window) {
        // @ts-ignore - TS might not know requestIdleCallback on some environments
        requestIdleCallback(() => setTimeout(loadChat, 4000));
      } else {
        setTimeout(loadChat, 4000);
      }
    };

    if (document.readyState === 'complete') {
      initChat();
    } else {
      window.addEventListener('load', initChat);
      return () => window.removeEventListener('load', initChat);
    }
  }, [isEmbed]);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen bg-brand-navy flex items-center justify-center"><div className="w-8 h-8 rounded-full border-4 border-brand-sky border-t-transparent animate-spin"></div></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/ajuda" element={<Docs />} />
            <Route path="/ajuda/:categoria" element={<DocsCategory />} />
            <Route path="/ajuda/:categoria/:slug" element={<DocsArticle />} />
            <Route path="/termos" element={<Termos />} />
            <Route path="/privacidade" element={<Privacidade />} />
          </Routes>
        </Suspense>
      </Router>
      {!isEmbed && showChat && (
        <Suspense fallback={null}>
          <ChatWidget />
        </Suspense>
      )}
    </HelmetProvider>
  );
}
