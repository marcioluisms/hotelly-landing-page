import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogDir = path.join(__dirname, '../src/content/blog');
const docsDir = path.join(__dirname, '../src/content/docs');
const publicDir = path.join(__dirname, '../public');

// Ensure public dir exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

// Add static routes
const staticRoutes = ['/', '/blog', '/ajuda', '/termos', '/privacidade'];
const baseUrl = 'https://hotelly.com.br';

staticRoutes.forEach(route => {
  sitemap += `  <url>\n    <loc>${baseUrl}${route}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${route === '/' ? '1.0' : '0.8'}</priority>\n  </url>\n`;
});

// Add blog posts
if (fs.existsSync(blogDir)) {
  const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.md'));
  files.forEach(file => {
    const slug = file.replace('.md', '');
    sitemap += `  <url>\n    <loc>${baseUrl}/blog/${slug}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
  });
}

// Add help center docs
if (fs.existsSync(docsDir)) {
  const categories = fs.readdirSync(docsDir).filter(d =>
    fs.statSync(path.join(docsDir, d)).isDirectory()
  );

  categories.forEach(cat => {
    // Category page
    sitemap += `  <url>\n    <loc>${baseUrl}/ajuda/${cat}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;

    // Article pages
    const articles = fs.readdirSync(path.join(docsDir, cat)).filter(f =>
      f.endsWith('.md') && f[0] === f[0].toLowerCase()
    );
    articles.forEach(file => {
      const slug = file.replace('.md', '');
      sitemap += `  <url>\n    <loc>${baseUrl}/ajuda/${cat}/${slug}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>\n`;
    });
  });
}

sitemap += `</urlset>`;

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
console.log('✅ Sitemap generated successfully!');
