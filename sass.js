// Copyright (c) 2020 Woda <hello@woda.at>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// Additional configuration for Sass code.

module.exports = {
  "plugins": [
    "stylelint-scss",
  ],
  "rules": {
    "scss/at-extend-no-missing-placeholder": null,
    "scss/at-function-pattern": null,
    "scss/at-import-no-partial-leading-underscore": true,
    "scss/at-import-partial-extension-blacklist": ["scss"],
    "scss/at-mixin-argumentless-call-parentheses": "always",
    "scss/at-rule-no-unknown": true,
    "scss/dollar-variable-colon-space-after": "always",
    "scss/dollar-variable-colon-space-before": "never",
    "scss/dollar-variable-no-missing-interpolation": true,
    "scss/dollar-variable-pattern": null,
    "scss/media-feature-value-dollar-variable": "always",
    "scss/selector-no-redundant-nesting-selector": true,
  },
}
