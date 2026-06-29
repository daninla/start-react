import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import react from 'eslint-plugin-react'
import importPlugin from 'eslint-plugin-import'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: {
      react,
      import: importPlugin,
    },
    rules: {
      // ─── React Hooks ───────────────────────────────────────
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // ─── React ─────────────────────────────────────────────
      'react/jsx-key': 'error',
      'react/no-array-index-key': 'warn',
      'react/self-closing-comp': 'error',
      'react/jsx-no-useless-fragment': 'warn',

      // ─── Переменные ────────────────────────────────────────
      'no-unused-vars': 'error',
      'no-undef': 'error',

      // ─── Качество кода ─────────────────────────────────────
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',

      // ─── Импорты ───────────────────────────────────────────
      'import/order': ['warn', {
        groups: [
          'builtin',
          'external',  
          'internal',
          'parent',
          'sibling',   
          'index', 
        ],
        'newlines-between': 'always',
      }],
      'import/no-unused-modules': 'warn',
    },
  },
])