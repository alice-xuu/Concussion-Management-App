import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import uiStyle from '../../components/uiStyle.jsx';

/**
 * The screen will be perform memory test.
 * This is the first test out of the Further Tests
 * After this test is completed, user needs to navigate to the next test which
 * is Reaction Test.
 */
function MTOne({ navigation }) {
  return (
    <View style={uiStyle.container}>
      <ScrollView>
        <Text style={uiStyle.text}>
          Welcome to the first memory test. {'\n'}
          {'\n'}
          The patient will be presented with three images to remember, they will
          be tested on these images once now and then again at the end of the
          other assessments. {'\n'}
          {'\n'}
          Pass the phone to the patient.
        </Text>
      </ScrollView>

      <TouchableOpacity
        onPress={() => navigation.navigate('Memory Test 2')}
        style={uiStyle.bottomButton}
      >
        <Text style={uiStyle.buttonLabel}>Start!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});

export default MTOne;
