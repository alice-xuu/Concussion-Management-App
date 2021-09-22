import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  allCheckboxContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    marginHorizontal: 50,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    margin: 1,
  },

  checkboxBase: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'transparent',
  },

  checkboxChecked: {
    backgroundColor: '#C4C4C4',
  },

  checkboxLabel: {
    marginLeft: 8,
    fontWeight: '500',
    fontSize: 16,
  },
});
