// eslint-disable-next-line import/no-extraneous-dependencies
const path = require("path");

module.exports = {
  resolve: {
    alias: {
      "@": path.resolve(__dirname),
      "~": path.resolve(__dirname)
    }
  }
};
