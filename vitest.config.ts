import { defineConfig, coverageConfigDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.ts'],
    css: {
      modules: {
        classNameStrategy: 'non-scoped',
      },
    },
    coverage: {
      provider: 'v8',
      exclude: [
        ...coverageConfigDefaults.exclude,
        './build/**',
        './dist/**',
        './temp/**',
      ],
    },
    testTimeout: 60000,
  },
});
