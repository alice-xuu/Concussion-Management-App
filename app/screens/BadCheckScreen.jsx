import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import uiStyle from '../components/uiStyle';
/**
 * Shows result for check if patient have any selected non-well symptoms.
 */
function BadCheckScreen({ navigation }) {
  return (
    <SafeAreaView style={uiStyle.container}>
      <Text style={styles.text}>
        Your patient needs to go to hospital immediately. Call 000.
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  callSymbol: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0000',
    borderRadius: 100,
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: 0.3,
    marginHorizontal: 50,
    marginVertical: 10,
    fontWeight: 'bold',
    position: 'absolute',
    top: 150,
  },
  label: {
    color: 'white',
    fontWeight: 'bold',
  }
});

export default BadCheckScreen;
