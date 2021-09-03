import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import uiStyle from '../components/uiStyle';
/**
 * Shows result and gives a suggestion based on
 * the user's responses.
 */
function BadCheckScreen({ navigation }) {
  return (
    <View style={uiStyle.container}>
      <Text style={uiStyle.text}>
        Your patient needs to go to hospital immediately, please call 000 now.
      </Text>
      <View style={styles.callSymbol}>
        <Text style={styles.label}>Call 000</Text>
      </View>
      <TouchableOpacity
        style={uiStyle.nextButton}
        onPress={() => navigation.navigate('Create Profile')}
      >
        <Text style={uiStyle.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  callSymbol: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 100,
    backgroundColor: 'red',
    marginVertical: 310,
  },
  button: {
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'black',
    marginHorizontal: 50,
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    marginHorizontal: 50,
    marginVertical: 10,
  },
});

export default BadCheckScreen;
