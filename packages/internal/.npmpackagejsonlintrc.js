const config = require('./src/npmlint.json');

module.exports = {
  ...config,
  rules: {
    ...config.rules,
    'valid-values-private': ['error', [true]],
  },
};
