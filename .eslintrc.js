module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended", // Prettier integration
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    indent: ["error", 2],
    semi: ["error", "always"],
  },
  overrides: [
    {
      files: ["**/*.scss"],
      extends: ["stylelint-config-standard"], // Add a stylelint config for SCSS
    },
  ],
};
