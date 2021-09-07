import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import uiStyle from '../components/uiStyle';
/**
 * Shows result for check if patient have any selected non-well symptoms.
 */
function BadCheckScreen({ navigation }) {
  return (
    <View style={uiStyle.container}>
      <Text style={styles.text}>
        Your patient needs to go to hospital immediately, please call 000 now.
      </Text>
      <View style={styles.callSymbol}>
        <Text style={styles.label}>Call 000</Text>
      </View>
      <TouchableOpacity
        style={uiStyle.bottomButton}
        onPress={() => navigation.navigate('Create Profile')}
      >
        <Text style={uiStyle.buttonLabel}>Next</Text>
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
    backgroundColor: '#ff0000',
    marginVertical: 310,
  },
  text: {
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: 0.3,
    marginHorizontal: 50,
    marginVertical: 10,
    fontWeight: 'bold',
    position: 'absolute',
    top: 200,
  },
});

export default BadCheckScreen;
