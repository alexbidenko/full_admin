module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    "airbnb-typescript",
    "plugin:prettier/recommended",
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: `./tsconfig.json`
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
      }
    ],
    'react/jsx-one-expression-per-line': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-mutable-exports': 'off',
  },
};
