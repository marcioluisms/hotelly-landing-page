import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, path.resolve(__dirname), 'VITE_');
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
      // VITE_ENABLE_CHECKOUT_MODAL: o .env sempre vence — process.env do CI/CD é ignorado intencionalmente
      'import.meta.env.VITE_ENABLE_CHECKOUT_MODAL': JSON.stringify(env.VITE_ENABLE_CHECKOUT_MODAL ?? ''),
      'import.meta.env.VITE_HOTELLY_API_URL': JSON.stringify(env.VITE_HOTELLY_API_URL || process.env.VITE_HOTELLY_API_URL || ''),
      'import.meta.env.VITE_TURNSTILE_SITE_KEY': JSON.stringify(env.VITE_TURNSTILE_SITE_KEY || process.env.VITE_TURNSTILE_SITE_KEY || ''),
      'import.meta.env.VITE_VAGAS_PREENCHIDAS': JSON.stringify(env.VITE_VAGAS_PREENCHIDAS || process.env.VITE_VAGAS_PREENCHIDAS || '0'),
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
    envDir: path.resolve(__dirname),
    build: {
      sourcemap: false,
    },
  };
});