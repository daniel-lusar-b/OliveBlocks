import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import environment from 'vite-plugin-environment';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: './',
  plugins: [
    react(),
    environment('all', { prefix: 'CANISTER_' }),
    environment('all', { prefix: 'DFX_' }),
  ],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  server: {
    host: '127.0.0.1',
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:4943',
        changeOrigin: true,
      },
    },
  },
});
// This configuration file sets up Vite for a React project with environment variable handling and a proxy for API requests.
// It specifies the output directory for the build, enables React support, and configures the development