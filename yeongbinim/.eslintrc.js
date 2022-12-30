module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'naver',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint', 'prettier'
  ],
  rules: {
    'no-console': 'off',
    'no-var': 'error',
    'class-methods-use-this': 'off'
  }
}