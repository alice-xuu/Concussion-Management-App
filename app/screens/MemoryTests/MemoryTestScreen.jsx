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
function MemoryTestScreen({ navigation }) {
  return (
    <View style={uiStyle.container}>
      <Text style={uiStyle.text}>Welcome to the first memory test.</Text>
      <Text style={uiStyle.text}>
        The patient will be presented with three images to remember, they will
        be tested on these images once now and then again at the end of the
        other assessments.
      </Text>
      <Text style={uiStyle.text}>Pass the phone to the patient.</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Memory Test 2/6')}
        style={uiStyle.nextButton}
      >
        <Text style={uiStyle.buttonText}>Start!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});

export default MemoryTestScreen;
