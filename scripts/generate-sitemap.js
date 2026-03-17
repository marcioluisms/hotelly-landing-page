import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogDir = path.join(__dirname, '../src/content/blog');
const publicDir = path.join(__dirname, '../public');

// Ensure public dir exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

// Add static routes
const staticRoutes = ['/', '/blog', '/termos', '/privacidade'];
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

sitemap += `</urlset>`;

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
console.log('✅ Sitemap generated successfully!');
