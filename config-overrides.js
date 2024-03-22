const path = require('path');

module.exports = function override(config, env) {
  // Add a custom alias
  config.resolve.alias = {
    ...config.resolve.alias,
    '@components': path.resolve(__dirname, 'src/components/'),
  };

  // Return the modified config
  return config;
};