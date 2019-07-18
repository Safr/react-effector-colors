const aliases = require('./.webpack-aliases');
const aliasMap = Object.keys(aliases).map(alias => [alias, aliases[alias]]);

module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react', 'react-app'],
  plugins: ['prettier', 'react-hooks'],
  rules: {
    camelcase: 0,
    'react/no-array-index-key': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-underscore-dangle': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-filename-extension': 0,
    'react/destructuring-assignment': 0,
    'no-use-before-define': 0,
  },
  settings: {
    'import/resolver': {
      alias: aliasMap,
    },
  },
};
