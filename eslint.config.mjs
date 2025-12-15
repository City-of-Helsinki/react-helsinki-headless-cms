import js from '@eslint/js';
import stylisticPlugin from '@stylistic/eslint-plugin';
import tseslint from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import globals from 'globals';

const files = [
  '**/*.js',
  '**/*.jsx',
  '**/*.ts',
  '**/*.tsx',
  '**/*.cjs',
  '**/*.mjs',
];

export default [
  // Ignores
  {
    ignores: [
      'src/common/eventsService/__generated__.ts',
      'src/common/headlessService/__generated__.ts',
      'src/common/venuesService/__generated__.ts',
    ],
  },

  js.configs.recommended,
  tseslint.configs.eslintRecommended,
  ...tseslint.configs.recommended,

  // react config
  {
    files,
    plugins: { react: reactPlugin },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
      'react/jsx-props-no-spreading': 'off',
      'react/prop-types': 'off',
      'react/require-default-props': 'off',
      'react/react-in-jsx-scope': 'off',
      // Extra
      'react/jsx-no-target-blank': 'warn',
      'react/jsx-no-useless-fragment': 'warn',
      'react/function-component-definition': ['error'],
      'react/no-array-index-key': 'error',
    },
  },

  // react-hooks config
  {
    files,
    plugins: { 'react-hooks': reactHooksPlugin },
    rules: reactHooksPlugin.configs.recommended.rules,
  },

  // jsx-a11y config
  {
    files,
    plugins: { 'jsx-a11y': jsxA11yPlugin },
    rules: {
      ...jsxA11yPlugin.flatConfigs.recommended.rules,
      'jsx-a11y/label-has-associated-control': [
        2,
        {
          required: {
            some: ['nesting', 'id'],
          },
        },
      ],
    },
  },

  // import config
  {
    files,
    plugins: { import: importPlugin },
    rules: {
      ...importPlugin.flatConfigs.errors.rules,
      ...importPlugin.flatConfigs.warnings.rules,
      ...importPlugin.flatConfigs.typescript.rules,
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            'src/common/utils/customRender.tsx', // Used by tests only
            '**/*.test.ts*',
            '**/__mocks__/*.ts*',
            '**/mocks/**/*.ts*',
            '**/*.stories.ts*',
            'rollup.config.*',
          ],
        },
      ],
      'import/extensions': 'off',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
          ],
          'newlines-between': 'always',
        },
      ],
      'import/prefer-default-export': 'off',
    },
  },

  // Stylistic rules
  {
    files,
    plugins: { '@stylistic': stylisticPlugin },
    rules: {
      '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'array-bracket-spacing': ['warn', 'never'],
      'object-curly-spacing': ['warn', 'always'],
    },
  },

  // prettier config
  {
    files,
    plugins: { prettier: prettierPlugin },
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      'prettier/prettier': 'error',
      // Turn off rules that may cause problems, see
      // https://github.com/prettier/eslint-plugin-prettier/issues/65
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
    },
  },

  // General rules
  {
    files,
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2018,
        ecmaFeatures: { jsx: true },
        projectService: true, // For enabling types
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          paths: ['src'],
        },
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      'consistent-return': 'error',
      'func-names': ['error', 'always'],
      'no-bitwise': 'error',
      'no-console': 'warn',
      'no-nested-ternary': 'error',
      'no-plusplus': 'error',
      'no-shadow': 'off',
      'no-undef': 'warn',
      'no-underscore-dangle': 'error',
      'no-unused-vars': 'off',
    },
  },

  // Overrides for typescript files
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/no-shadow': ['error'],
      'no-undef': 'off',
      'no-empty-function': 'off', // Disable base rule to avoid conflicts
      '@typescript-eslint/no-empty-function': 'warn', // Enable TS version
    },
  },
];
