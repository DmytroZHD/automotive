module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'no-console': 'warn',
    '@typescript-eslint/no-unused-vars': ['error'],
  },
};