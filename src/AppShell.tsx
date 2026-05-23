import React, { Suspense, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEmbed } from './hooks/useEmbed';

// Home is the critical route: stays eager-loaded so it ships in the initial
// bundle and renders both on server (renderToString) and on client without
// Suspense boundaries.
import Home from './pages/Home';

// Other routes are split per-route to keep the initial JS payload small.
// On the server (Vite SSR), import.meta.env.SSR is true and we must NOT use
// React.lazy because renderToString cannot await Suspense. We resolve to
// statically-imported modules in that case.
// On the client, React.lazy is used, so heavy dependencies like react-markdown,
// remark-gfm and fuse.js are only fetched when the user navigates to those
// routes after the SSR'd initial paint.
import TermosStatic from './pages/Termos';
import PrivacidadeStatic from './pages/Privacidade';
import BlogStatic from './pages/Blog';
import BlogPostStatic from './pages/BlogPost';
import DocsStatic from './pages/Docs';
import DocsCategoryStatic from './pages/DocsCategory';
import DocsArticleStatic from './pages/DocsArticle';
import ThankYouStatic from './pages/ThankYou';

const isSSR = import.meta.env.SSR;

const Termos = isSSR ? TermosStatic : React.lazy(() => import('./pages/Termos'));
const Privacidade = isSSR ? PrivacidadeStatic : React.lazy(() => import('./pages/Privacidade'));
const Blog = isSSR ? BlogStatic : React.lazy(() => import('./pages/Blog'));
const BlogPost = isSSR ? BlogPostStatic : React.lazy(() => import('./pages/BlogPost'));
const Docs = isSSR ? DocsStatic : React.lazy(() => import('./pages/Docs'));
const DocsCategory = isSSR ? DocsCategoryStatic : React.lazy(() => import('./pages/DocsCategory'));
const DocsArticle = isSSR ? DocsArticleStatic : React.lazy(() => import('./pages/DocsArticle'));
const ThankYou = isSSR ? ThankYouStatic : React.lazy(() => import('./pages/ThankYou'));

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

  const routes = (
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
  );

  return (
    <HelmetProvider context={helmetContext}>
      <ScrollToTop />
      {isSSR ? routes : <Suspense fallback={null}>{routes}</Suspense>}
      {ENABLE_MASCOT && !isEmbed && showChat && (
        <Suspense fallback={null}>
          <ChatWidget />
        </Suspense>
      )}
    </HelmetProvider>
  );
}
