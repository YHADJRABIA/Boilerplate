import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import tseslint from 'typescript-eslint'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {},
})

const eslintConfig = [
  ...compat.extends('eslint:recommended', 'next/core-web-vitals', 'prettier'),
  ...tseslint.configs.recommended,
  ...compat.extends(
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ),
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jest: true,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: (await import('eslint-plugin-react')).default,
      'react-hooks': (await import('eslint-plugin-react-hooks')).default,
      prettier: (await import('eslint-plugin-prettier')).default,
      'unused-imports': (await import('eslint-plugin-unused-imports')).default,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // Prettier integration
      'prettier/prettier': 'error',

      // React-specific rules
      'react/jsx-no-literals': 'error',
      'react/jsx-pascal-case': ['warn', { allowAllCaps: true }],
      'react/prop-types': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/no-direct-mutation-state': 'warn',
      'react/style-prop-object': 'warn',
      'react/require-render-return': 'error',
      'react/no-deprecated': 'warn',
      'react/jsx-fragments': 'warn',
      'react/jsx-no-target-blank': 'warn',
      'react/jsx-sort-props': [
        'warn',
        { callbacksLast: true, shorthandFirst: true, ignoreCase: true },
      ],
      'react-hooks/set-state-in-effect': 'off',

      // TypeScript-specific rules
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',

      // Next.js rules
      '@next/next/no-img-element': 'warn',
      '@next/next/no-html-link-for-pages': 'warn',

      // Unused import management
      'unused-imports/no-unused-imports': 'warn',

      // Miscellaneous best practices
      'no-const-assign': 'error',
      'no-compare-neg-zero': 'error',
      'no-cond-assign': 'error',
      'prefer-const': 'warn',
      'prefer-template': 'error',
      'no-duplicate-imports': ['error', { includeExports: true }],
      eqeqeq: 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'require-await': 'error',
      'spaced-comment': ['warn', 'always', { exceptions: ['*'] }],

      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'next/link',
              message: "Use '@/i18n/routing' for Link component.",
            },
            {
              name: 'next/navigation',
              importNames: [
                'redirect',
                'permanentRedirect',
                'useRouter',
                'usePathname',
              ],
              message: "Use '@/i18n/routing' for navigation.",
            },
          ],
          patterns: ['@/app/[locale]/**/*.tsx'],
        },
      ],

      // Semicolon handling (aligned with Prettier)
      semi: 'off',
      '@typescript-eslint/semi': 'off',
    },
  },
  {
    files: ['**/app/api/**/route.ts', '**/app/page.tsx'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          name: '@/i18n/routing',
          importNames: [
            'Link',
            'redirect',
            'getPathname',
            'useRouter',
            'usePathname',
          ],
          message: "Use 'next/link' or 'next/navigation' for API routes.",
        },
      ],
    },
  },
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
    ],
  },
]

export default eslintConfig
