module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    browser: true
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    },
  },
  rules: {
    'eol-last': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/newline-after-import': 'off',
    'global-require': 'off',
    'react/jsx-filename-extension': [0],
    'no-use-before-define': ["error", { "functions": false, "classes": false, "variables": false }]
  },
};
