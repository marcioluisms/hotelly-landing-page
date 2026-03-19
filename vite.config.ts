import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(process.env.GEMINI_API_KEY || ''),
      '__ENV_DEBUG__': JSON.stringify({
        hasGeminiKey: !!process.env.GEMINI_API_KEY,
        keyLength: (process.env.GEMINI_API_KEY || '').length,
        nodeEnv: process.env.NODE_ENV || 'unset',
        envKeys: Object.keys(process.env).filter(k => k.includes('GEMINI') || k.includes('API') || k.includes('KEY') || k.includes('APP')).sort(),
      }),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
