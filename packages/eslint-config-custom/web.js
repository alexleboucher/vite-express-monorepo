module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './apps/web/tsconfig.json',
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './apps/web/tsconfig.json',
      },
    },
  },
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    "plugin:react/recommended",
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  plugins: ['react', 'react-refresh', '@arthurgeron/react-usememo'],
  rules: {
    'spaced-comment': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-duplicate-imports': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'newline-before-return': 'error',
    'camelcase': 'warn',
    'object-curly-spacing': ['error', 'always'],
    'spaced-comment': 'warn',
    'require-await': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'eqeqeq': 'error',

    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],

    'eslint-comments/no-unused-disable': 'error',

    'import/no-duplicates': ['error'],
    'import/order': ['error', {
      groups: [
        ['builtin', 'external'],
        ['internal', 'index', 'sibling', 'parent', 'object']
      ],
      'newlines-between': 'always-and-inside-groups'
    }],

    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-array-index-key': 'warn',
    'react/jsx-key': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/self-closing-comp': ['error', { component: true, html: true }],
    'react/jsx-no-constructed-context-values': 'error',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

    '@arthurgeron/react-usememo/require-usememo': ['error', { checkHookReturnObject: true }],
  },
}