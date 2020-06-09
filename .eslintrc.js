var path = require('path');

module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['react'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  rules: {
    'react/jsx-props-no-spreading': [1, {
      'html': 'ignore',
      'explicitSpread': 'ignore',
      'exceptions': ['Link'],
    }],
    'no-use-before-define': [2, { 'variables': false }],
    'react/jsx-filename-extension': [1, {
      'extensions': ['.js', '.jsx']
    }],
    'no-return-await': [1],
    'react/prop-types': [2, { ignore: ['children'] }],
    'react/button-has-type': [0],
    'arrow-body-style': [2, 'as-needed'],
    'eol-last': 2,
    'react/no-array-index-key': 1,
    'import/prefer-default-export': 1,
  }
};
