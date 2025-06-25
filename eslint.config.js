import js from '@eslint/js';
import globals from 'globals';
import html from 'eslint-plugin-html';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.html'],
    plugins: {
      html
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021
      },
      ecmaVersion: 2021,
      sourceType: 'module'
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
      'eqeqeq': 'error',
      'curly': 'error',
      'no-trailing-spaces': 'error',
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always']
    }
  },
  {
    files: ['**/*.html'],
    rules: {
      'no-undef': 'off'
    }
  }
];
