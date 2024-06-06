/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  test: {
    globals: true,
    restoreMocks: true,
    environment: 'node',
  },
  plugins: [tsconfigPaths()],
});
