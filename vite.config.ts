import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), cloudflare()],
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
  };
});