import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  const preloadCssPlugin = () => {
    return {
      name: 'preload-css',
      transformIndexHtml(html: string) {
        return html.replace(
          /<link rel="stylesheet"(.*?)href="([^"]+\.css)"(.*?)>/g,
          `<link rel="preload" as="style" href="$2" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet"$1href="$2"$3></noscript>`
        );
      }
    };
  };

  return {
    plugins: [react(), tailwindcss(), preloadCssPlugin()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(process.env.GEMINI_API_KEY || ''),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      headers: {
        'Content-Security-Policy': "frame-ancestors 'self' https://adm.hotelly.ia.br",
      },
    },
    build: {
      sourcemap: false,
    },
  };
});
