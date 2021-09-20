import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';

import uiStyle from '../../components/uiStyle.jsx';

/**
 * The screen will be perform memory test.
 * This is the first test out of the Further Tests
 * After this test is completed, user needs to navigate to the next test which
 * is Reaction Test.
 */
function RTOne({ navigation }) {
  return (
    <View style={uiStyle.container}>
      <Text style={uiStyle.text}>
        Welcome to the reaction test.
        {'\n'}
        {'\n'}
        The patient will be presented with traffic lights that will turn yellow
        after a period of time. They should tap the screen once they turn
        yellow. The test will run three times.
        {'\n'} {'\n'}
        Pass the phone to the patient.
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Reaction Test 2')}
        style={uiStyle.bottomButton}
      >
        <Text style={uiStyle.buttonLabel}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  startCheckButton: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#ff0000',
  },

  startCheckText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default RTOne;
