const prettier = require('eslint-plugin-prettier')
const typescriptEslint = require('@typescript-eslint/eslint-plugin')
const reactHooks = require('eslint-plugin-react-hooks')
const importPlugin = require('eslint-plugin-import')

module.exports = [
  {
    name: 'FavrappEslintConfig',
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/__tests__/*.js'],
    ignores: ['node_modules', 'build', 'dist', 'public', 'babel.config.js', '.expo/**/*'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      sourceType: 'module',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        fetch: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
      },
    },
    plugins: {
      prettier,
      '@typescript-eslint': typescriptEslint,
      'react-hooks': reactHooks,
      import: importPlugin,
    },
    rules: {
      'import/export': 'error',
      eqeqeq: 'error',
      'no-console': 'off',
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'prefer-destructuring': [
        'error',
        {
          VariableDeclarator: {
            object: true,
          },
        },
      ],
      'consistent-return': [
        'error',
        {
          treatUndefinedAsUnspecified: true,
        },
      ],
      'prefer-template': 'error',
      'object-shorthand': 'error',
      'prettier/prettier': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: false,
        },
      ],
      '@typescript-eslint/require-await': 'error',
      'react/display-name': 'off',
      'react/no-children-prop': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['eslint.config.js', '**/__tests__/*.js'],
    languageOptions: {
      parserOptions: {
        project: null,
      },
    },
    rules: {
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/require-await': 'off',
    },
  },
]
