/// <reference types='vite/client' />
/// <reference types='vitest' />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //agregado para el taller
  base: '/my-app',
  server: {
    host: true,
    port: 8081,
  },
    //agregado para el taller vitetest
    test: {
      globals: true,
      environment: 'jsdom',
    },  
})
