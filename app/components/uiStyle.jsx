import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 20,
    lineHeight: 21,
    letterSpacing: 0.25,
    marginHorizontal: 50,
    marginVertical: 10,
  },

  nextButton: {
    width: 300,
    height: 50,
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#fc5c65',
    position: 'absolute',
    bottom: 90,
  },
  buttonText: {
    color: '#FFFFFFF',
    fontSize: 22,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
