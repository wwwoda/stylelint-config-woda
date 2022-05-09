// Copyright (c) 2020 Woda <hello@woda.at>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// Additional configuration for Tailwind.

module.exports = {
  "rules": {
    "scss/at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "layer",
          "variants",
          "responsive",
          "screen",
        ],
      },
    ],
    "declaration-block-trailing-semicolon": null,
    "max-line-length": null,
    "no-descending-specificity": null,
    "no-invalid-position-at-import-rule": [
      true,
      {
        ignoreAtRules: [
          "forward",
          "tailwind",
          "use",
        ],
      },
    ],
  },
}
