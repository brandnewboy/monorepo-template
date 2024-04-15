module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended'],
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'no-debugger': 'warn',
    'vue/return-in-computed-property': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': 'off'
  }
}
