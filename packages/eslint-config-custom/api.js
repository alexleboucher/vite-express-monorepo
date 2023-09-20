const { resolve } = require('node:path');
 
const project = resolve(process.cwd(), 'tsconfig.json');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project,
  },
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended'
  ].map(require.resolve),
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ['build', 'node_modules'],
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': ['warn', { 'allow': ['warn', 'error', 'info'] }],
    'no-duplicate-imports': 'error',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'camelcase': 'warn',
    'object-curly-spacing': ['error', 'always'],
    'spaced-comment': 'warn',
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true}],
    '@typescript-eslint/await-thenable': 'error',
    'require-await': 'off',
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: 'req|res|next|err' }],
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          ['internal', 'index', 'sibling', 'parent', 'object', 'type']
        ],
        'newlines-between': 'always-and-inside-groups'
      }
    ]
  },
};