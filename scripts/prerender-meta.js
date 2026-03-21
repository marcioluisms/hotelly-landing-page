/**
 * prerender-meta.js
 *
 * Post-build script that generates per-route HTML files with correct
 * <title>, <meta>, Open Graph, Twitter Card, canonical and JSON-LD tags.
 *
 * Runs after `vite build` and reads the same markdown sources the app uses.
 * Cloudflare Pages serves the static file when it exists; React hydrates on
 * the client via hydrateRoot().
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import fm from 'front-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, '../dist');
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
  // Replace <title>
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(title)}</title>`
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*">/,
    `<meta name="description" content="${escapeHtml(description)}">`
  );

  // Replace canonical
  html = html.replace(
    /<link rel="canonical" href="[^"]*">/,
    `<link rel="canonical" href="${escapeHtml(canonical)}">`
  );

  // Replace OG tags
  html = html.replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${escapeHtml(ogTitle || title)}">`);
  html = html.replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${escapeHtml(ogDescription || description)}">`);
  html = html.replace(/<meta property="og:type" content="[^"]*">/, `<meta property="og:type" content="${escapeHtml(ogType || 'website')}">`);
  html = html.replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${escapeHtml(ogUrl || canonical)}">`);

  if (ogImage) {
    html = html.replace(/<meta property="og:image" content="[^"]*">/, `<meta property="og:image" content="${escapeHtml(ogImage)}">`);
  }

  // Replace Twitter tags
  html = html.replace(/<meta name="twitter:card" content="[^"]*">/, `<meta name="twitter:card" content="${escapeHtml(twitterCard || 'summary')}">`);
  html = html.replace(/<meta name="twitter:title" content="[^"]*">/, `<meta name="twitter:title" content="${escapeHtml(twitterTitle || title)}">`);
  html = html.replace(/<meta name="twitter:description" content="[^"]*">/, `<meta name="twitter:description" content="${escapeHtml(twitterDescription || description)}">`);

  if (twitterImage) {
    html = html.replace(/<meta name="twitter:image" content="[^"]*">/, `<meta name="twitter:image" content="${escapeHtml(twitterImage)}">`);
  }

  // Add keywords if provided (insert after description meta)
  if (keywords) {
    html = html.replace(
      /(<meta name="description" content="[^"]*">)/,
      `$1\n    <meta name="keywords" content="${escapeHtml(keywords)}">`
    );
  }

  // Replace JSON-LD
  if (jsonLd) {
    html = html.replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script type="application/ld+json">\n    ${JSON.stringify(jsonLd)}\n    </script>`
    );
  }

  // Inject a tiny inline script that guards the pre-rendered <title> from
  // being blanked by React 19's head management during initial mount.
  // It watches the <title> element and restores the original value if it's
  // ever cleared. Auto-disconnects after 5s to avoid permanent overhead.
  const titleGuard = `<script>(function(){var t=document.title;if(!t)return;var e=document.querySelector("title");if(!e)return;var o=new MutationObserver(function(){if(!document.title||document.title==="")document.title=t});o.observe(e,{childList:true,characterData:true,subtree:true});setTimeout(function(){o.disconnect()},5000)})()</script>`;
  html = html.replace('</head>', `${titleGuard}\n  </head>`);

  return html;
}

/**
 * Write HTML to the correct path under dist/.
 * e.g. route "/ajuda/reservas/como-criar" → dist/ajuda/reservas/como-criar/index.html
 */
function writePage(route, html) {
  const dir = path.join(distDir, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf-8');
}

// ── Generate pages ──────────────────────────────────────────────────────

let count = 0;

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

      // JSON-LD: HowTo for "como-fazer", Article otherwise
      const jsonLd = artTipo === 'como-fazer'
        ? {
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            'name': artTitle,
            'description': artDesc,
            'publisher': {
              '@type': 'Organization',
              'name': 'Hotelly',
              'logo': { '@type': 'ImageObject', 'url': `${BASE_URL}/hotelly.png` },
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
              'logo': { '@type': 'ImageObject', 'url': `${BASE_URL}/hotelly.png` },
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
        'logo': { '@type': 'ImageObject', 'url': `${BASE_URL}/hotelly.png` },
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

console.log(`✅ Pre-rendered meta tags for ${count} pages.`);
