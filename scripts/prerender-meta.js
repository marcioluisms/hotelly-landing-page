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
import fm from 'front-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, '../dist');
const ssrDir = path.join(__dirname, '../dist-ssr');
const docsDir = path.join(__dirname, '../src/content/docs');
const blogDir = path.join(__dirname, '../src/content/blog');
const BASE_URL = 'https://hotelly.com.br';

// ── Category labels (mirrors src/utils/docs.ts) ────────────────────────
const CATEGORY_LABELS = {
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

// ─── Static legal pages ────────────────────────────────────────────────
{
  const title = 'Termos de Uso | Hotelly';
  const description = 'Termos de Uso da plataforma Hotelly.';
  const html = injectMeta(template, {
    title,
    description,
    canonical: `${BASE_URL}/termos`,
    ogType: 'website',
    ogUrl: `${BASE_URL}/termos`,
    ogTitle: title,
    ogDescription: description,
    twitterCard: 'summary',
    twitterTitle: title,
    twitterDescription: description,
  });
  writePage('termos', html, '/termos');
  count++;
}

{
  const title = 'Política de Privacidade | Hotelly';
  const description = 'Como o Hotelly trata os dados pessoais de clientes e hóspedes.';
  const html = injectMeta(template, {
    title,
    description,
    canonical: `${BASE_URL}/privacidade`,
    ogType: 'website',
    ogUrl: `${BASE_URL}/privacidade`,
    ogTitle: title,
    ogDescription: description,
    twitterCard: 'summary',
    twitterTitle: title,
    twitterDescription: description,
  });
  writePage('privacidade', html, '/privacidade');
  count++;
}

// ─── 1. Help Center hub: /ajuda ─────────────────────────────────────────
{
  const title = 'Central de Ajuda | Hotelly';
  const description = 'Encontre guias, tutoriais e respostas para todas as suas dúvidas sobre o Hotelly. Artigos organizados por módulo para proprietários, gerentes e equipe.';
  const html = injectMeta(template, {
    title,
    description,
    canonical: `${BASE_URL}/ajuda`,
    ogType: 'website',
    ogUrl: `${BASE_URL}/ajuda`,
    ogTitle: title,
    ogDescription: 'Guias, tutoriais e respostas para todas as suas dúvidas sobre o Hotelly.',
    twitterCard: 'summary',
    twitterTitle: title,
    twitterDescription: 'Guias, tutoriais e respostas para todas as suas dúvidas sobre o Hotelly.',
  });
  writePage('ajuda', html);
  count++;
}

// ─── 2. Help Center categories: /ajuda/:categoria ───────────────────────
if (fs.existsSync(docsDir)) {
  const categories = fs.readdirSync(docsDir).filter(d =>
    fs.statSync(path.join(docsDir, d)).isDirectory()
  );

  for (const cat of categories) {
    const label = CATEGORY_LABELS[cat] || cat;
    const title = `${label} | Ajuda Hotelly`;
    const description = `Artigos de ajuda sobre ${label} no Hotelly.`;

    const html = injectMeta(template, {
      title,
      description,
      canonical: `${BASE_URL}/ajuda/${cat}`,
      ogType: 'website',
      ogUrl: `${BASE_URL}/ajuda/${cat}`,
      ogTitle: title,
      ogDescription: description,
      twitterCard: 'summary',
      twitterTitle: title,
      twitterDescription: description,
    });
    writePage(`ajuda/${cat}`, html);
    count++;

    // ─── 3. Help Center articles: /ajuda/:categoria/:slug ─────────────
    const articles = fs.readdirSync(path.join(docsDir, cat)).filter(f =>
      f.endsWith('.md') && f[0] === f[0].toLowerCase()
    );

    for (const file of articles) {
      const slug = file.replace('.md', '');
      const raw = fs.readFileSync(path.join(docsDir, cat, file), 'utf-8');
      const { attributes } = fm(raw);

      const artTitle = attributes['título'] || attributes.titulo || slug;
      const artDesc = attributes['descrição'] || attributes.descricao || '';
      const artTipo = attributes.tipo || 'conceito';
      const pageTitle = `${artTitle} | Ajuda Hotelly`;
      const articleUrl = `${BASE_URL}/ajuda/${cat}/${slug}`;

      const jsonLd = artTipo === 'como-fazer'
        ? {
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            'name': artTitle,
            'description': artDesc,
            'publisher': {
              '@type': 'Organization',
              'name': 'Hotelly',
              'logo': { '@type': 'ImageObject', 'url': `${BASE_URL}/hotelly.webp` },
            },
          }
        : {
            '@context': 'https://schema.org',
            '@type': 'Article',
            'headline': artTitle,
            'description': artDesc,
            'author': { '@type': 'Organization', 'name': 'Hotelly' },
            'publisher': {
              '@type': 'Organization',
              'name': 'Hotelly',
              'logo': { '@type': 'ImageObject', 'url': `${BASE_URL}/hotelly.webp` },
            },
          };

      const html = injectMeta(template, {
        title: pageTitle,
        description: artDesc,
        canonical: articleUrl,
        ogType: 'article',
        ogUrl: articleUrl,
        ogTitle: artTitle,
        ogDescription: artDesc,
        twitterCard: 'summary',
        twitterTitle: artTitle,
        twitterDescription: artDesc,
        jsonLd,
      });
      writePage(`ajuda/${cat}/${slug}`, html);
      count++;
    }
  }
}

// ─── 4. Blog hub: /blog ─────────────────────────────────────────────────
{
  const title = 'Blog Hotelly | Vendas Diretas e Gestão Hoteleira';
  const description = 'Estratégias, tecnologia e insights para revolucionar a gestão e as vendas diretas da sua hospedagem.';
  const html = injectMeta(template, {
    title,
    description,
    canonical: `${BASE_URL}/blog`,
    ogType: 'website',
    ogUrl: `${BASE_URL}/blog`,
    ogTitle: title,
    ogDescription: description,
    twitterCard: 'summary',
    twitterTitle: title,
    twitterDescription: description,
  });
  writePage('blog', html);
  count++;
}

// ─── 5. Blog posts: /blog/:slug ─────────────────────────────────────────
if (fs.existsSync(blogDir)) {
  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));

  for (const file of files) {
    const raw = fs.readFileSync(path.join(blogDir, file), 'utf-8');
    const { attributes } = fm(raw);

    const slug = attributes.slug || file.replace('.md', '');
    const postTitle = attributes.title || slug;
    const excerpt = attributes.excerpt || '';
    const tags = attributes.tags || [];
    const coverImage = attributes.coverImage || '';
    const date = attributes.date || '';
    const lastUpdated = attributes.lastUpdated || date;
    const authorName = attributes.author?.name || 'Hotelly';

    const pageTitle = `${postTitle} | Blog Hotelly`;
    const postUrl = `${BASE_URL}/blog/${slug}`;
    const fullCoverImage = coverImage.startsWith('http') ? coverImage : `${BASE_URL}${coverImage}`;

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      'headline': postTitle,
      'description': excerpt,
      'image': fullCoverImage,
      'datePublished': date,
      'dateModified': lastUpdated,
      'author': { '@type': 'Person', 'name': authorName },
      'publisher': {
        '@type': 'Organization',
        'name': 'Hotelly',
        'logo': { '@type': 'ImageObject', 'url': `${BASE_URL}/hotelly.webp` },
      },
    };

    const html = injectMeta(template, {
      title: pageTitle,
      description: excerpt,
      canonical: postUrl,
      ogType: 'article',
      ogUrl: postUrl,
      ogTitle: postTitle,
      ogDescription: excerpt,
      ogImage: fullCoverImage,
      twitterCard: 'summary_large_image',
      twitterTitle: postTitle,
      twitterDescription: excerpt,
      twitterImage: fullCoverImage,
      keywords: tags.join(', '),
      jsonLd,
    });
    writePage(`blog/${slug}`, html);
    count++;
  }
}

console.log(`✅ Pre-rendered ${count} pages (meta tags + SSR body).`);
