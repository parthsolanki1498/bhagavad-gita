const path = require('path');

module.exports = {
  webpack: (config, env) => {
    config.resolve.fallback = {
      url: require.resolve('url/'),
      // Other Node.js polyfills can be added here if needed
    };
    return config;
  }
};
