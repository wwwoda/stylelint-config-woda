// Additional configuration for Sass code.
// Be sure to install `stylelint-scss` for the `scss/*` rules (it's only optional if you're not using Sass).

const namingPattern = require("./stylelint-config-woda.js").namingPattern;

module.exports = {
  "plugins": [
    "stylelint-scss",
  ],
  "rules": {
    "scss/at-extend-no-missing-placeholder": true,
    "scss/at-function-pattern": namingPattern,
    "scss/at-import-no-partial-leading-underscore": true,
    "scss/at-import-partial-extension-blacklist": ["scss"],
    "scss/at-mixin-argumentless-call-parentheses": "always",
    "scss/at-mixin-pattern": namingPattern,
    "scss/at-rule-no-unknown": true,
    "scss/dollar-variable-colon-space-after": "always",
    "scss/dollar-variable-colon-space-before": "never",
    "scss/dollar-variable-no-missing-interpolation": true,
    "scss/dollar-variable-pattern": namingPattern,
    "scss/media-feature-value-dollar-variable": "always",
    "scss/percent-placeholder-pattern": namingPattern,
    "scss/selector-no-redundant-nesting-selector": true,
  },
}
