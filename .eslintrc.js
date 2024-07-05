module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    '@react-native',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'import/no-unresolved': 'error',
        'react-hooks/exhaustive-deps': 'off',
        'linebrake-style': 'auto',
        'sort-imports': [
          'error',
          { ignoreCase: true, ignoreDeclarationSort: true },
        ],
        'import/order': ['error'],
      },
    },
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      'babel-module': {},
      typescript: {
        alwaysTryTypes: true,
      },
      node: true,
    },
  },
};
