import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['tests/**/*.{test,spec}.ts'],
    threads: false,
    maxThreads: 1,
  },
})