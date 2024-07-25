import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    rules: {
      eqeqeq: 'error',
      quotes: ['error', 'single'],
      'no-duplicate-imports': 'error',
      complexity: ['error', 10],
      'no-console': 'error',
      'max-params': ['error', 4],
      'no-useless-catch': 'error',
      'no-var': 'error',
      'no-redeclare': 'error'
    }
  }
];
