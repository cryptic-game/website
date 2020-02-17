const path = require("path");

module.exports = {
  "root": true,
  "env": {
    browser: true,
    es6: true,
    node: true
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
        config: path.resolve(__dirname, "./webpack.resolve.js")
      }
    }
  },
  "rules": {
    "nuxt/no-cjs-in-config": "off",
    "unicorn/filename-case": "off",
    "unicorn/prevent-abbreviations": ["warn", {
      whitelist: {
        req: true,
        res: true
      }
    }]
  }
};
