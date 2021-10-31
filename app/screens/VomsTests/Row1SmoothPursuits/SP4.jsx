import * as React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import uiStyle from '../../../components/uiStyle';

function SP4({ navigation }) {
  return (
    <SafeAreaView style={uiStyle.container}>
      <Text style={uiStyle.text}>
        Please rotate the screen so it's vertical.
        {'\n'} {'\n'}
        Ask the affected person to follow the circle while keeping their head
        still again.
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('VOMS Smooth Pursuits 5')}
        style={uiStyle.bottomButton}
      >
        <Text style={uiStyle.buttonLabel}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default SP4;
