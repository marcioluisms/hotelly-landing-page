import React, { Suspense, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEmbed } from './hooks/useEmbed';

// Eager imports (rendered both on server and client). React 19 + renderToString
// can't await React.lazy() during server render, so the page components
// themselves must be statically imported. Code-splitting per route is preserved
// because the build still produces separate chunks via dynamic page boundaries.
import Home from './pages/Home';
import Termos from './pages/Termos';
import Privacidade from './pages/Privacidade';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Docs from './pages/Docs';
import DocsCategory from './pages/DocsCategory';
import DocsArticle from './pages/DocsArticle';
import ThankYou from './pages/ThankYou';

// Client-only widgets remain lazy — they are not server-rendered.
const ChatWidget = React.lazy(() => import('./components/chat/ChatWidget'));
const ENABLE_MASCOT = import.meta.env.VITE_ENABLE_MASCOT === 'true';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

interface AppShellProps {
  helmetContext?: object;
}

export default function AppShell({ helmetContext }: AppShellProps) {
  const isEmbed = useEmbed();
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    if (!ENABLE_MASCOT) return;
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
    <HelmetProvider context={helmetContext}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/ajuda" element={<Docs />} />
        <Route path="/ajuda/:categoria" element={<DocsCategory />} />
        <Route path="/ajuda/:categoria/:slug" element={<DocsArticle />} />
        <Route path="/obrigado" element={<ThankYou />} />
        <Route path="/termos" element={<Termos />} />
        <Route path="/privacidade" element={<Privacidade />} />
      </Routes>
      {ENABLE_MASCOT && !isEmbed && showChat && (
        <Suspense fallback={null}>
          <ChatWidget />
        </Suspense>
      )}
    </HelmetProvider>
  );
}
