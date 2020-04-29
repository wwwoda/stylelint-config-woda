# stylelint-config-woda

> The standard shareable config for stylelint used by Woda.

Extends [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard) which in turn is an extension of [`stylelint-config-recommended`](https://github.com/stylelint/stylelint-config-recommended).

`stylelint-config-standard` turns on additional rules to enforce the common stylistic conventions found within a handful of CSS styleguides, including:
- [The Idiomatic CSS Principles](https://github.com/necolas/idiomatic-css),
- [Google's CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html#CSS_Formatting_Rules)
- [Airbnb's Styleguide](https://github.com/airbnb/css#css)
- [@mdo's Code Guide](http://codeguide.co/#css).

Additionally we set some custom rules that you can check out in the [main config file](./stylint-config-woda.js).

## Order

This config adds additional order rules utilizing the stylelint plugin [`stylelint-order`](https://github.com/hudochenkov/stylelint-order).

To see the order specific rules, please check out out the [order config](./order.js).

To see the property order specific rules, please check out the [property order config](./property-order.js).

The config sorts related property declarations by grouping together following the order:

1. Grid Layout
2. Flexbox
3. Positioning
4. Textual Content
5. Box Model
6. Background
7. Special Content Types
8. Animations

## SCSS

This config also adds additional SCSS rules utilizing the stylelint plugin [`stylelint-sass`](https://github.com/kristerkari/stylelint-scss).

The SASS rules are losely based on [sass-guidelin.es](https://sass-guidelin.es/) and [stylelint-config-sass-guidelines](https://github.com/bjankord/stylelint-config-sass-guidelines)

To see the SASS specific rules that this config uses, please check out the [scss config](./sass.js).

## Installation

If using `yarn`

```bash
yarn add --dev stylelint-config-woda stylelint
```

or with `npm`

```bash
npm i --save-dev stylelint-config-woda stylelint
```

## Usage

If you've installed `stylelint-config-woda` locally within your project, just set your `stylelint` config to:

```json
{
  "extends": "stylelint-config-woda"
}
```

If you've globally installed `stylelint-config-woda` using the `-g` flag, then you'll need to use the absolute path to `stylelint-config-woda` in your config e.g.

```json
{
  "extends": "/absolute/path/to/stylelint-config-woda"
}
```

Since [stylelint 9.7.0](https://github.com/stylelint/stylelint/blob/9.7.0/CHANGELOG.md#970), you can simply use the globally installed configuration name instead of the absolute path:

```json
{
  "extends": "stylelint-config-woda"
}
```

## Customization

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to change the `at-rule-no-unknown` rule to use its `ignoreAtRules` option, change the `indentation` to tabs, turn off the `number-leading-zero` rule,and add the `unit-whitelist` rule:

```json
{
  "extends": "stylelint-config-woda",
  "rules": {
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": ["extends", "ignores"]
      }
    ],
    "indentation": "tab",
    "number-leading-zero": null,
    "unit-whitelist": ["em", "rem", "s"]
  }
}
```

## Visual Studio Code Integration

Install the [stylelint-plus](https://marketplace.visualstudio.com/items?itemName=hex-ci.stylelint-plus) plugin for Visual Studio Code.

To turn on autofixing on file save add `"stylelint.autoFixOnSave": true` to the settings.

## PhpStorm and WebStorm

To enable autofixing on file save add a new watcher in Tools > Watchers with following settings

- Files to Watch
  - File type: `SCSS Style Sheet`
  - Scope: `Project Files`
- Tool to Run on Changes
  - Program: `/usr/local/bin/stylelint`
  - Arguments: `--fix $FilePath$`
  - Output paths to refresh: `$FilePath$`
  - Working directory: `$ProjectFileDir$`
  - Environment variables: `COMPILE_PARTIAL=true`
- Advanced Options
  - Disable all but `Trigger the watcher regardless of syntax errors`

## Docs

- [stylelint](https://stylelint.io/)
- [stylelint-order](https://github.com/hudochenkov/stylelint-order)
  - [`order`](./rules/order/README.md): Specify the order of content within declaration blocks.
  - [`properties-order`](./rules/properties-order/README.md): Specify the order of properties within declaration blocks.
  - [`properties-alphabetical-order`](./rules/properties-alphabetical-order/README.md): Specify the alphabetical order of properties within declaration blocks.
- [stylelint-scss](https://github.com/kristerkari/stylelint-scss)

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
