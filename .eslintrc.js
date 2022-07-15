module.exports = {
  env: {
    browser: true,
    'react-native/react-native': true,
    es2021: true,
  },
  rules: {
    'class-methods-use-this': 'off',
    'import/no-cycle': 'off',
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
    'no-useless-constructor': 'off',
    quotes: ['error', 'single'],
    'no-underscore-dangle': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    "prettier",
    "prettier/react"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-native',
    '@typescript-eslint',
  ],
};
