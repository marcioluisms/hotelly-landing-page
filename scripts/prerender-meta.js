/**
 * prerender-meta.js
 *
 * Post-build script that generates per-route HTML files with:
 *  1. Correct <title>, <meta>, Open Graph, Twitter Card, canonical and JSON-LD.
 *  2. Server-rendered body (HTML inside <div id="root">) via the SSR bundle
 *     produced by `vite build --ssr src/entry-server.tsx`.
 *
 * Runs after `vite build` + `vite build --ssr`. Cloudflare Pages serves the
 * static file when it exists; React hydrates on the client via hydrateRoot().
 *
 * Pre-rendering the body is what brings FCP/LCP down on slow mobile networks:
 * the browser paints the hero before the JS bundle is fetched.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, '../dist');
const ssrDir = path.join(__dirname, '../dist-ssr');
const BASE_URL = 'https://hotelly.com.br';

// ── Read the built index.html as template ───────────────────────────────
const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

// ── Load SSR bundle ─────────────────────────────────────────────────────
// vite build --ssr emits entry-server.js into dist-ssr/. We import it
// dynamically here so the script remains pure ESM.
const ssrEntryPath = path.join(ssrDir, 'entry-server.js');
let ssrRender = null;
if (fs.existsSync(ssrEntryPath)) {
  const mod = await import(pathToFileURL(ssrEntryPath).href);
  ssrRender = mod.render;
} else {
  console.warn(`⚠ SSR bundle not found at ${ssrEntryPath}. Body will not be pre-rendered.`);
}

/**
 * Inject server-rendered HTML into <div id="root"></div>.
 * Falls back to passing through the template if SSR is unavailable.
 */
function injectBody(html, url) {
  if (!ssrRender) return html;
  try {
    const { html: bodyHtml } = ssrRender(url);
    return html.replace(
      /<div id="root"><\/div>/,
      `<div id="root">${bodyHtml}</div>`
    );
  } catch (err) {
    console.error(`✗ SSR failed for ${url}:`, err.message);
    return html;
  }
}

// ── Helpers ─────────────────────────────────────────────────────────────

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Replace meta tags in the template <head> with route-specific values.
 */
function injectMeta(html, { title, description, canonical, ogType, ogUrl, ogTitle, ogDescription, ogImage, twitterCard, twitterTitle, twitterDescription, twitterImage, keywords, jsonLd }) {
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(title)}</title>`
  );

  html = html.replace(
    /<meta name="description" content="[^"]*">/,
    `<meta name="description" content="${escapeHtml(description)}">`
  );

  html = html.replace(
    /<link rel="canonical" href="[^"]*">/,
    `<link rel="canonical" href="${escapeHtml(canonical)}">`
  );

  html = html.replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${escapeHtml(ogTitle || title)}">`);
  html = html.replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${escapeHtml(ogDescription || description)}">`);
  html = html.replace(/<meta property="og:type" content="[^"]*">/, `<meta property="og:type" content="${escapeHtml(ogType || 'website')}">`);
  html = html.replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${escapeHtml(ogUrl || canonical)}">`);

  if (ogImage) {
    html = html.replace(/<meta property="og:image" content="[^"]*">/, `<meta property="og:image" content="${escapeHtml(ogImage)}">`);
  }

  html = html.replace(/<meta name="twitter:card" content="[^"]*">/, `<meta name="twitter:card" content="${escapeHtml(twitterCard || 'summary')}">`);
  html = html.replace(/<meta name="twitter:title" content="[^"]*">/, `<meta name="twitter:title" content="${escapeHtml(twitterTitle || title)}">`);
  html = html.replace(/<meta name="twitter:description" content="[^"]*">/, `<meta name="twitter:description" content="${escapeHtml(twitterDescription || description)}">`);

  if (twitterImage) {
    html = html.replace(/<meta name="twitter:image" content="[^"]*">/, `<meta name="twitter:image" content="${escapeHtml(twitterImage)}">`);
  }

  if (keywords) {
    html = html.replace(
      /(<meta name="description" content="[^"]*">)/,
      `$1\n    <meta name="keywords" content="${escapeHtml(keywords)}">`
    );
  }

  if (jsonLd) {
    html = html.replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script type="application/ld+json">\n    ${JSON.stringify(jsonLd)}\n    </script>`
    );
  }

  return html;
}

/**
 * Write HTML to the correct path under dist/.
 * e.g. route "/ajuda/reservas/como-criar" → dist/ajuda/reservas/como-criar/index.html
 *
 * Injects server-rendered body for the given URL before writing.
 */
function writePage(route, html, urlForSSR) {
  const finalHtml = injectBody(html, urlForSSR || `/${route}`);
  const dir = path.join(distDir, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), finalHtml, 'utf-8');
}

// ── Generate pages ──────────────────────────────────────────────────────

let count = 0;

// ─── 0. Home: dist/index.html (overwrite with SSR body) ─────────────────
// The root index.html is served by Cloudflare for "/". We inject the
// server-rendered Home directly here. Meta tags are left as-is (the template
// already carries Home's meta).
{
  const homeHtml = injectBody(template, '/');
  fs.writeFileSync(path.join(distDir, 'index.html'), homeHtml, 'utf-8');
  count++;
}

console.log(`✅ Pre-rendered ${count} pages (meta tags + SSR body).`);
