import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-config-prettier';

export default defineConfig([
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
    plugins: { js },
    rules: {
      ...js.configs.recommended.rules,
      'no-console': 'warn',
    },
  },
  {
    name: 'prettier',
    plugins: {},
    rules: prettier.rules,
  },
]);
