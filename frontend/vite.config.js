import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // ensures relative paths work in Netlify
  build: {
    outDir: 'dist', // match your Netlify publish directory
  },
  server: {
    watch: {
      usePolling: true, // fixes reload issues
    },
    host: true, // allows network access
    strictPort: true, // optional: keeps same port
  },
});
