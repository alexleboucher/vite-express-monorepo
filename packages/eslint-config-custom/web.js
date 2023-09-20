module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './apps/web/tsconfig.json',
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: './apps/web/tsconfig.json',
      },
    },
  },
  env: { browser: true, es2020: true },
  extends: [
    // Find a way to add 'eslint:recommended'
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'spaced-comment': 'warn',
  },
}