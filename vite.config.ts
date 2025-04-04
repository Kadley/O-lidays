// Je spécifie ici que mon projet dispose de vitest et je souhaite donc ajouter la configuration de vitest dans celle de vite
/// <reference types="vitest" />
import path from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.BASE_URL,

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    environment: 'happy-dom',
    setupFiles: ['./src/tests/setup.ts'],
  },
});
