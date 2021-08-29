import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    // text for instructions in the concussion check
    fontSize: 25,
    lineHeight: 25,
    letterSpacing: 0.3,
    marginHorizontal: 50,
    marginVertical: 10,
  },

  nextButton: {
    // consistent with "View History" button on Home screen, i.e long red button on bottom
    width: 300,
    height: 50,
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#fc5c65',
    position: 'absolute',
    bottom: 90,
  },
  buttonText: {
    // consistent with "View History" button on Home screen, i.e. white text in the button
    color: '#FFFFFFF',
    fontSize: 22,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
