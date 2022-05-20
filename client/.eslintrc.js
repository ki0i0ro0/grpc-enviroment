module.exports = {
  parser: 'vue-eslint-parser',
  extends: ['plugin:vue/vue3-recommended'],
  rules: {
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: 5,
      },
    ],
  },
}