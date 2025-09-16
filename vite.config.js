import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        members: resolve(__dirname, 'members/index.html'),
        topics: resolve(__dirname, 'topics/index.html'),
      },
    },
  },
});
