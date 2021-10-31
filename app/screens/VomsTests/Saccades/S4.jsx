import * as React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import uiStyle from '../../../components/uiStyle';

function S4({ navigation }) {
  return (
    <SafeAreaView style={uiStyle.container}>
      <Text style={uiStyle.text}>
        Please rotate the screen so it's vertical.
        {'\n'} {'\n'}
        Ask the affected person to alternate top and bottom 10 times as quickly
        as possible.
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('VOMS Saccades 5')}
        style={uiStyle.bottomButton}
      >
        <Text style={uiStyle.buttonLabel}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default S4;
