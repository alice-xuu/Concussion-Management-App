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
function MTThree({ navigation }) {
  return (
    <View style={uiStyle.container}>
      <Text style={uiStyle.text}>
        Instructions {'\n'}
        {'\n'}
        Please pass the phone to your supervisor so they can input the results.
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Memory Test 4')}
        style={uiStyle.nextButton}
      >
        <Text style={uiStyle.buttonText}>Start!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});

export default MTThree;
