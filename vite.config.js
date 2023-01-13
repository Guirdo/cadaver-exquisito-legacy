import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname)
    }
  },
  test: {
    environment: 'happy-dom',
    globals: true,
    reporters: 'verbose'
  }
})
