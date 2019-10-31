module.exports = {
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'indent': [
      'error',
      2,
      {
        'FunctionDeclaration': { 'parameters': 1, 'body': 1 },
        'FunctionExpression': { 'parameters': 1, 'body': 1 },
        'ObjectExpression': 1,
        'SwitchCase': 1,
      },
    ],
    'no-constant-condition': 'off',
    'quotes': ['error', 'single', { 'avoidEscape': true }],
  },
};
