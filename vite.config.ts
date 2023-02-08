import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    testTimeout: 10000,
    exclude: [
      '**/build/**',
      '**/tests/**',
      '**/node_modules/**'
    ]
  },
})