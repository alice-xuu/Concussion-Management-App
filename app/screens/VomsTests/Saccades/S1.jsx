import * as React from 'react';
import { Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';

import uiStyle from '../../../components/uiStyle';

function S1({ navigation }) {
  return (
    <SafeAreaView style={uiStyle.container}>
      <Text style={uiStyle.titleText}>Instructions</Text>
      <ScrollView>
        <Text style={uiStyle.text}>
          The affected person will be shown two circles at either end of the
          screen. Ask them to alternate left and right 10 times as quickly as
          possible.
          {'\n'} {'\n'}
          Please allow them to sit down and place the phone landscape at eye
          level, 10cm away.
        </Text>
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('VOMS Saccades 2')}
        style={uiStyle.bottomButton}
      >
        <Text style={uiStyle.buttonLabel}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default S1;
