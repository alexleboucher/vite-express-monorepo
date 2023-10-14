import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const { HOST, WEB_PORT = 3000 } = process.env;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: HOST,
    port: +WEB_PORT,
    watch: {
      usePolling: true,
    },
  },
})
