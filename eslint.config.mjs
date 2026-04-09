import js from '@eslint/js';
import stylisticPlugin from '@stylistic/eslint-plugin';
import tseslint from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import-x';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from '@eslint-react/eslint-plugin';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
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
    plugins: { '@eslint-react': reactPlugin },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      '@eslint-react/jsx-props-no-spreading': 'off',
      '@eslint-react/prop-types': 'off',
      '@eslint-react/require-default-props': 'off',
      '@eslint-react/react-in-jsx-scope': 'off',
      // Extra
      '@eslint-react/jsx-no-useless-fragment': 'warn',
      '@eslint-react/no-array-index-key': 'error',
      '@eslint-react/exhaustive-deps': 0,
      '@eslint-react/no-children-map': 0,
      '@eslint-react/no-clone-element': 0,
      '@eslint-react/no-children-to-array': 0
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
    plugins: { 'import-x': importPlugin },
    rules: {
      ...importPlugin.flatConfigs.errors.rules,
      ...importPlugin.flatConfigs.warnings.rules,
      ...importPlugin.flatConfigs.typescript.rules,
      'import-x/no-extraneous-dependencies': [
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
      'import-x/extensions': 'off',
      'import-x/order': [
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
      'import-x/prefer-default-export': 'off',
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
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        }),
      ],
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
