module.exports = {
  plugins: ['react', 'react-native'],
  extends: ['@react-native-community'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    'react-native/no-unused-styles': 1,
    'react-native/no-color-literals': 1,
    'react/jsx-max-props-per-line': [1, { maximum: 1 }],
    semi: ['error', 'always'],
  },
};
