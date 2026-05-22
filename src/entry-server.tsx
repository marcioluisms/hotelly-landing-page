import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import AppShell from './AppShell';

interface RenderResult {
  html: string;
  helmetContext: { helmet?: any };
}

/**
 * Server-side render entry point. Called by scripts/prerender-meta.js at
 * build time for each static route (/, /termos, /privacidade, /blog, etc.).
 *
 * Returns the HTML string for <div id="root"> plus a helmetContext object
 * populated by react-helmet-async (so per-route <title>/<meta> from inside
 * components can be serialized into <head>).
 */
export function render(url: string): RenderResult {
  const helmetContext: { helmet?: any } = {};

  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <AppShell helmetContext={helmetContext} />
      </StaticRouter>
    </StrictMode>
  );

  return { html, helmetContext };
}
