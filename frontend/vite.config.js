import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // fixes reload not triggering in some OS/file systems
    },
    host: true, // makes it work across devices / network
    strictPort: true, // keeps same port (optional)
  },
})
