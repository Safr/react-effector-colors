const {
  useEslintRc,
  // addBabelPlugin,
  addWebpackAlias,
  override,
} = require('customize-cra');
const aliases = require('./.webpack-aliases');

module.exports = override(
  useEslintRc(),
  // addBabelPlugin('babel-plugin-styled-components'),
  addWebpackAlias(aliases),
);
