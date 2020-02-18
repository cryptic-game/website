module.exports = {
  extends: "@moritzruth",
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
    ecmaVersion: 10
  },
  settings: {
    "import/resolver": {
      node: {}
    }
  },
  rules: {
    "import/no-default-export": "off",
    "unicorn/no-fn-reference-in-iterator": "off",
    "newline-per-chained-call": "off",
    "capitalized-comments": "off",
    "callback-return": "off"
  }
};
