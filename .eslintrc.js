module.exports = {
  plugins: ['react', 'react-native', 'prettier'],
  extends: [
    '@react-native-community',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react-native/no-unused-styles': 1,
    'react-native/no-color-literals': 1,
  },
};
