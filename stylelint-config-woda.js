// Copyright (c) 2020 Woda <hello@woda.at>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

"use strict";

// lowercase-single-dashed-names-only-0
const namingPattern = /^(([a-z]([a-z0-9-]+))|[A-Z]([A-Za-z0-9]+))?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$/;

module.exports = {
  extends: [
    "stylelint-config-standard",
    "./sass.js",
    "./tailwind.js"
  ],

  // export namingPattern so it can be used in your own rules
  namingPattern,

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
    "block-closing-brace-newline-after": [
      "always",
      {
        "ignoreAtRules": ["if", "else"]
      }
    ],
    "declaration-empty-line-before": null,
    "declaration-property-value-blacklist": {
      border: ["none"],
      "border-top": ["none"],
      "border-right": ["none"],
      "border-bottom": ["none"],
      "border-left": ["none"]
    },
    "number-max-precision": 8,
    "selector-attribute-quotes": "always",
    "selector-class-pattern": namingPattern,
    "selector-id-pattern": /^[a-z]([a-z0-9-]+)/,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        // :global is used by css modules
        "ignorePseudoClasses": ["global"]
      }
    ],
    "unit-blacklist": ["pt"],
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
