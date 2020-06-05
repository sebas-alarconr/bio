module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
  ],
  plugins: [
    'stylelint-scss',
  ],
  rules: {
    'at-rule-no-unknown': [ true, {
      ignoreAtRules: [
        'include',
        'each',
        'mixin',
        'extend',
        'if',
        'function',
        'for',
        'else',
        'return',
        'value',
      ],
    }],
  },
};
