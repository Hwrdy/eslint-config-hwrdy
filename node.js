module.exports = {
  'extends': [
    './index',
    './rules/node',
  ].map(require.resolve),

  'env': {
    'node': true,
    'jest': true,
    'mocha': true,
  },

  rules: {},
};
