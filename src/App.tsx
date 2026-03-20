import React, { Suspense, useEffect } from 'react';
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
      {!isEmbed && (
        <Suspense fallback={null}>
          <ChatWidget />
        </Suspense>
      )}
    </HelmetProvider>
  );
}
