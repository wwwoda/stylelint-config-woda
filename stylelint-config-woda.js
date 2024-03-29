// Copyright (c) 2020 Woda <hello@woda.at>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

"use strict";

module.exports = {
  extends: [
    "stylelint-config-standard",
  ],

  plugins: [
    "stylelint-order",
  ],

  rules: {
    "at-rule-empty-line-before": [
      "always",
      {
        except: ["blockless-after-same-name-blockless", "first-nested"],
        ignore: ["after-comment", "blockless-after-same-name-blockless"],
        // allow @else to come on same line as closing @if brace
        ignoreAtRules: ["import", "else"],
      }
    ],
    "at-rule-no-unknown": null,
    "at-rule-no-vendor-prefix": true,
    "declaration-empty-line-before": null,
    "declaration-property-value-disallowed-list": {
      border: ["none"],
      "border-top": ["none"],
      "border-right": ["none"],
      "border-bottom": ["none"],
      "border-left": ["none"]
    },
    "number-max-precision": 8,
    "selector-attribute-quotes": "always",
    "selector-class-pattern": null,
    "selector-id-pattern": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        // :global is used by css modules
        "ignorePseudoClasses": ["global"]
      }
    ],
    "unit-disallowed-list": ["pt"],
    // order is defined in a separate file for legibility
    "order/order": [
      require("./config/order.js"),
      { unspecified: "ignore" }
    ],

    // property order is defined in a separate file for legibility
    "order/properties-order": [
      require("./config/property-order.js"),
      { unspecified: "bottomAlphabetical" }
    ],
  },
};
