import { FlatCompat } from '@eslint/eslintrc';
import eslintPreferArrow from 'eslint-plugin-prefer-arrow';
import eslintPrettier from 'eslint-plugin-prettier';
import eslintValidateFilename from 'eslint-plugin-validate-filename';
import globals from 'globals';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const defineConfig = [
  {
    ignores: ['./.next/*', './_next/*', './node_modules/*', './dist/*'],
  },
  ...compat.extends('next/core-web-vitals'),
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
    plugins: {
      'validate-filename': eslintValidateFilename,
      'prefer-arrow': eslintPreferArrow,
      prettier: eslintPrettier,
      globals: globals,
    },
    rules: {
      'no-unused-vars': 'warn',
      'capitalized-comments': ['warn', 'always'],
      'validate-filename/naming-rules': [
        'error',
        {
          rules: [
            {
              case: 'kebab',
              target: '**/src/**',
            },
            {
              case: 'kebab',
              target: '**/app/**',
              patterns: '^(page|layout|loading|error|not-found|route|template|index)\\.(js|jsx)$',
            },
          ],
        },
      ],
      'prefer-arrow/prefer-arrow-functions': [
        'error',
        {
          disallowPrototype: true,
          singleReturnOnly: false,
          classPropertiesAllowed: false,
        },
      ],
    },
  },
  {
    files: ['src/components/ui/**/*.{js,jsx}'],
    rules: {
      'prefer-arrow/prefer-arrow-functions': 'off',
    },
  },
];

export default defineConfig;
