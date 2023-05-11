module.exports = {
  env: {
    'browser': true,
    'es2021': true,
    'jest/globals': true,
  },
  extends: ['standard-with-typescript', 'plugin:jest/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // General rules
    'no-console': 'error', // Disallow the use of console
    'no-alert': 'error', // Disallow the use of alert
    'no-debugger': 'error', // Disallow the use of debugger
    'no-empty': ['error', { allowEmptyCatch: true }], // Disallow empty block statements, except for empty catch clauses
    'no-extra-semi': 'error', // Disallow unnecessary semicolons
    'no-unreachable': 'error', // Disallow unreachable code
    'no-unsafe-negation': 'error', // Disallow negating the left operand of relational operators
    'no-useless-escape': 'error', // Disallow unnecessary escape characters

    // Code style rules
    'indent': ['error', 2], // Enforce two-space indentation
    'quotes': ['error', 'single'], // Enforce single quotes
    'semi': ['error', 'always'], // Require semicolons at the end of statements
    'comma-dangle': ['error', 'always-multiline'], // Require trailing commas in multiline object and array literals
    'no-unused-vars': ['error', { vars: 'all', args: 'none' }], // Disallow unused variables, except function arguments
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }], // Disallow multiple consecutive empty lines
    'camelcase': 'error', // Require camelCase naming convention
    'eqeqeq': 'error', // Require strict equality checks (=== and !==)
    'max-len': ['error', { code: 120, tabWidth: 2, ignoreUrls: true }], // Enforce a maximum line length
    'no-multi-spaces': 'error', // Disallow multiple spaces
    'no-trailing-spaces': 'error', // Disallow trailing whitespace
    'operator-linebreak': ['error', 'before'], // Enforce line breaks before and after operators
    'quote-props': ['error', 'consistent-as-needed'], // Enforce consistent quotes for object property names
    'space-before-function-paren': ['error', 'never'], // Disallow space before function parentheses

    // ES6-specific rules
    'arrow-parens': ['error', 'as-needed'], // Require parentheses around arrow function parameters only when needed
    'arrow-spacing': 'error', // Enforce consistent spacing before and after the arrow in arrow functions
    'no-var': 'error', // Require using let or const instead of var
    'prefer-const': 'error', // Require using const for variables that are not reassigned
    'no-useless-constructor': 'error', // Disallow unnecessary constructors
    'object-shorthand': ['error', 'always'],
    'arrow-body-style': ['error', 'as-needed'], // Require braces around arrow function bodies only when needed
    'no-confusing-arrow': 'error', // Disallow confusing arrow functions
    'no-duplicate-imports': 'error', // Disallow duplicate imports
    'no-useless-rename': 'error', // Disallow unnecessary renaming of imports, exports, and destructured assignments
  },
};
