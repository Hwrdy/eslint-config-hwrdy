module.exports = {
  'extends': [
    './index',
    './rules/compat',
  ].map(require.resolve),

  'env': {
    'browser': true,
    'node': true,
    'jest': true
  },

  'plugins': ['flowtype'],

  'settings': {
    'polyfills': [
      'fetch'
    ]
  },
};
