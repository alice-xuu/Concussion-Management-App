import { StyleSheet } from 'react-native';

const title = '#000000';
const text = '#fff';
const background = '#fff';
const buttons = '#ff0000';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: background,
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
    marginHorizontal: 20,
    marginVertical: 10,
  },
  textNoAbsolute: {
    // text for instructions in the concussion check
    fontSize: 25,
    lineHeight: 25,
    letterSpacing: 0.3,
    marginHorizontal: 50,
    marginVertical: 10,
  },
  bottomButton: {
    // consistent with "View History" button on Home screen, i.e long red button on bottom
    width: 300,
    height: 50,
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
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
