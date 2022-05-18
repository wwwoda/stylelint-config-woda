// Copyright (c) 2020 Woda <hello@woda.at>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// Additional configuration for Sass code.

const baseConfig = require("./stylelint-config-woda.js");

module.exports = {
  extends: [
    "stylelint-config-standard-scss",
  ],

  plugins: [
    ...baseConfig.plugins,
  ],

  rules: {
    ...baseConfig.rules,
    "function-no-unknown": null,
  },
}
