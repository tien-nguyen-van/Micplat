module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'semi': [1, 'never'], // warning when using semi-colon in code
    'no-console': 1, // warning when has console log
    'no-lonely-if': 1, // warning when using just one if in block
    'arrow-parens': 0, // disable arrow functions can omit parentheses when they have exactly one parameter.
    '@typescript-eslint/no-unused-vars': 1, // warning no unused variable in typescript
    'no-unreachable': 1, // disallow unreachable code after return, throw, continue, and break statements
    'camelcase': 1, // name of variable must camelcase
    'no-trailing-spaces': 1, // disallow trailing spaces
    'no-multiple-empty-lines': 1, // disallow multiple empty lines
    'quotes': [1, 'single', { 'avoidEscape': true }], // must use single quote
    'quote-props': [1, 'as-needed'], // allow double quote or backtick if needed ex: " 'pink' "
    'no-case-declarations': 1, // decleare variable when use switch case not hash code
    'array-bracket-spacing': 1, // disallow or enforce spaces inside of brackets
    'no-undef': 1, // warning when using value not undefined
    'padded-blocks': 0, // allow padding within blocks
    '@typescript-eslint/no-explicit-any': 0, // allow using any type in typescript
    '@typescript-eslint/ban-types': 0 // allow using any type
  },
};
