import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import Termos from './pages/Termos';
import Privacidade from './pages/Privacidade';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Docs from './pages/Docs';
import DocsCategory from './pages/DocsCategory';
import DocsArticle from './pages/DocsArticle';
import { useEmbed } from './hooks/useEmbed';

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
      </Router>
      {!isEmbed && showChat && (
        <Suspense fallback={null}>
          <ChatWidget />
        </Suspense>
      )}
    </HelmetProvider>
  );
}
