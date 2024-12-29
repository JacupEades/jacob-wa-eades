module.exports = {
  extends: [
    "stylelint-config-standard-scss", // SCSS linting rules
    "stylelint-config-recommended", // Recommended linting rules
  ],
  rules: {
    // Add your own custom rules here if needed
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["extend", "include", "mixin"], // Ignore common SCSS rules
      },
    ],
    "no-empty-source": null, // Allow empty sources for flexibility
  },
};
