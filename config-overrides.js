const path = require('path');

// module.exports = {
//   webpack: (config, env) => {
//     config.resolve.fallback = {
//       url: require.resolve('url/'),
//       // Other Node.js polyfills can be added here if needed
//     };
//     return config;
//   }
// };

module.exports = function override(config, env) {
  console.log("React app rewired works!")
  config.resolve.fallback = {
    fs: false
  };
  return config;
};