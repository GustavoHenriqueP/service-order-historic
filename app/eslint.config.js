import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import vitest from 'eslint-plugin-vitest';
import jestDom from 'eslint-plugin-jest-dom';
import tseslint from 'typescript-eslint';

export default tseslint.config({
  extends: [js.configs.recommended, ...tseslint.configs.recommended],
  files: ['**/*.{ts,tsx}'],
  ignores: ['dist'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    vitest,
    jestDom,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    ...vitest.configs.recommended.rules,
    ...jestDom.configs.recommended.rules,
    'react-refresh/only-export-components': 'off',
  },
});
