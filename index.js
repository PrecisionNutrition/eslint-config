module.exports = {
  rules: {
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'generator-star-spacing': [
      'error',
      { 'before': true, 'after': true },
    ],
    'indent': [
      'error',
      2,
      {
        'FunctionDeclaration': { 'parameters': 1, 'body': 1 },
        'FunctionExpression': { 'parameters': 1, 'body': 1 },
        'ObjectExpression': 1,
        'SwitchCase': 1,

        // https://github.com/babel/babel-eslint/issues/681#issuecomment-451336031
        'ignoredNodes': ['TemplateLiteral'],
      },
    ],
    'keyword-spacing': [
      'error',
      {
        'after': true,
        'before': true,
      },
    ],
    'no-constant-condition': 'off',
    'no-var': 'error',
    'no-use-before-define': 'error',
    'prefer-const': 'error',
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'semi': ['error', 'always'],
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'always'
    }],
    'space-in-parens': ['error', 'never'],
  },
};
