const INLINE_ELEMENTS = require("eslint-plugin-vue/lib/utils/inline-non-void-elements");

module.exports = {
  root: true,
  env: {
    browser: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: [
    "@nuxtjs",
    "plugin:nuxt/recommended",
    "plugin:vue/essential"
  ],
  rules: {
    "no-unused-vars": "warn",
    indent: "off",
    "no-dupe-class-members": "error",
    "no-multiple-empty-lines": ["warn", {
      max: 1,
      maxEOF: 0,
      maxBOF: 0
    }],
    "no-console": "off",
    "no-extra-parens": "warn",
    "linebreak-style": "off",
    "object-curly-spacing": ["warn", "always"],
    "no-template-curly-in-string": "warn",
    "array-callback-return": "error",
    "dot-location": "warn",
    "dot-notation": "warn",
    eqeqeq: "error",
    "no-caller": "error",
    "no-case-declarations": "warn",
    "no-empty-function": "warn",
    "no-eval": "warn",
    "no-extend-native": "error",
    "no-extra-bind": "warn",
    "no-floating-decimal": "warn",
    "no-labels": "error",
    "no-implicit-coercion": "error",
    "no-implied-eval": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-new-wrappers": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-return": "error",
    "no-void": "error",
    "global-require": "error",
    "handle-callback-err": "error",
    "no-buffer-constructor": "error",
    "no-path-concat": "error",
    "no-process-exit": "error",
    "no-sync": "error",
    "array-bracket-newline": ["error", "consistent"],
    "prefer-promise-reject-errors": "error",
    strict: ["error", "never"],
    "array-bracket-spacing": ["error", "never"],
    "array-element-newline": ["error", "consistent"],
    "block-spacing": "error",
    "brace-style": "error",
    "comma-dangle": "error",
    "comma-spacing": "error",
    "comma-style": "error",
    "computed-property-spacing": "error",
    "consistent-this": ["error", "self"],
    "func-call-spacing": "error",
    "func-name-matching": "warn",
    "key-spacing": "error",
    "keyword-spacing": "error",
    "max-len": ["warn", {
      code: 120
    }],
    "multiline-ternary": ["error", "always-multiline"],
    "new-parens": "error",
    "no-array-constructor": "error",
    "no-lonely-if": "error",
    "no-negated-condition": "error",
    "no-new-object": "error",
    "no-plusplus": "error",
    "no-trailing-spaces": ["error", {
      skipBlankLines: true
    }],
    "no-underscore-dangle": "error",
    "no-unneeded-ternary": "error",
    "nonblock-statement-body-position": "error",
    "object-curly-newline": "warn",
    "operator-assignment": "error",
    "operator-linebreak": "error",
    "padded-blocks": ["error", "never"],
    "prefer-object-spread": "error",
    "quote-props": ["error", "as-needed"],
    quotes: ["error", "double"],
    semi: ["error", "always", {
      omitLastInOneLineBlock: false
    }],
    "semi-spacing": "error",
    "semi-style": "error",
    "space-before-blocks": "error",
    "space-before-function-paren": ["error", {
      anonymous: "never",
      named: "never",
      asyncArrow: "always"
    }],
    "space-in-parens": "error",
    "space-infix-ops": "error",
    "spaced-comment": "error",
    "switch-colon-spacing": "error",
    "template-tag-spacing": "error",
    "unicode-bom": "error",
    "wrap-regex": "error",
    "arrow-body-style": "error",
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": "error",
    "generator-star-spacing": "error",
    "no-duplicate-imports": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "warn",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-numeric-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "sort-imports": ["error", {
      ignoreDeclarationSort: true
    }],
    "template-curly-spacing": "error",
    "nuxt/no-cjs-in-config": "off",
    "vue/html-closing-bracket-spacing": ["error", {
      startTag: "never",
      endTag: "never",
      selfClosingTag: "never"
    }],
    "vue/script-indent": ["warn", 2, {
      baseIndent: 1,
      switchCase: 1
    }],
    "vue/no-v-html": "off",
    "vue/html-self-closing": "off",
    "vue/singleline-html-element-content-newline": ["warn", {
      ignores: ["pre", "textarea", "nuxt-link", ...INLINE_ELEMENTS]
    }]
  }
};
