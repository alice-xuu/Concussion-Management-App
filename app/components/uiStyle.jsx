import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: '#000000',
    fontSize: 30,
    position: 'absolute',
    top: 60,
    fontWeight: 'bold',
  },

  text: {
    // text for instructions in the concussion check
    fontSize: 25,
    lineHeight: 25,
    letterSpacing: 0.3,
    marginHorizontal: 50,
    marginVertical: 10,
    position: 'absolute',
    top: 20,
  },

  bottomButton: {
    // consistent with "View History" button on Home screen, i.e long red button on bottom
    width: 300,
    height: 50,
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#ff0000',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 90,
  },
  buttonLabel: {
    // consistent with "View History" button on Home screen, i.e. white text in the button
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
