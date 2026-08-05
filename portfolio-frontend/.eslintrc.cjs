module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    // project specific rules
    'react/react-in-jsx-scope': 'off', // not needed with React 17+
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
