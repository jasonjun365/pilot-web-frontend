module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'alloy',
    'alloy/react',
    'alloy/typescript',
  ],
  rules: {
    'no-var': 'error',
    'no-debugger': 0,
    '@typescript-eslint/consistent-type-definitions': [
      'error',
      'interface'
    ],
    '@typescript-eslint/prefer-function-type': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-require-imports': 0,
    'no-case-declarations': 'off',
    'indent': [
      'error',
      2
    ],
    'linebreak-style': 'off',
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'no-unreachable': 0,
    'max-params': 0,
    '@typescript-eslint/prefer-optional-chain': 0,
    'max-nested-callbacks': 0,
    'no-template-curly-in-string': 0,
    'react/no-unknown-property': 0
  }
};