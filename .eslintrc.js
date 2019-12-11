module.exports = {
  "root": true,
  "env": {
    browser: true,
    node: true,
    es6: true
  },
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "extends": [
    "plugin:nuxt/recommended",
    "@moritzruth",
    "@moritzruth/eslint-config/vue"
  ],
  "settings": {
    "import/resolver": {
      webpack: {
        config: "webpack.resolve.js"
      }
    }
  }
};
