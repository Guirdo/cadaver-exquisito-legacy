import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://localhost:5173',
    setupNodeEvents (on, config) {
    }
  }
})
