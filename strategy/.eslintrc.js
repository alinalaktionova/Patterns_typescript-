module.exports = {
  "extends": [
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  env: {
    es6: true,
    node: true
  },
  parser: "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  parserOptions: {
    "max-len": {
      code: 80
    },
    tabWidth: 4,
    sourceType: "module",
    allowImportExportEverywhere: true,
    "new-cap": {
      newIsCap: true
    },
    ecmaVersion: 8,
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": ["error", { before: true, after: true }],
    quotes: ["error", "single"],
    "no-shadow": ["error"],
    "no-shadow-restricted-names": ["error"],
    "no-unused-vars": ["error"],
    "no-use-before-define": ["error"],
    "no-this-before-super": ["error"],
    "no-useless-constructor": ["error"],
    "no-var": ["error"]
  }
};
