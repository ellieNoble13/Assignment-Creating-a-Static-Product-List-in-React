import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // This is the magic fix for "expect is not defined"
    environment: 'jsdom',
    setupFiles: './src/setupTests.js', // This links our handshake file
  },
})