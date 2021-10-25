import * as React from 'react';
import { Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';

import uiStyle from '../../../components/uiStyle';

function VomsS1({ navigation }) {
  return (
    <SafeAreaView style={uiStyle.container}>
      <Text style={uiStyle.titleText}>Instructions</Text>
      <ScrollView>
        <Text style={uiStyle.text}>
          The affected person will be shown two circles at either end of the
          screen. Ask them to alternate looking at each circle.
          {'\n'} {'\n'}
          Please allow them to sit down and place the phone landscape at eye
          level, 10cm away.
        </Text>
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('Voms Test SP 3')}
        style={uiStyle.bottomButton}
      >
        <Text style={uiStyle.buttonLabel}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default VomsS1;
