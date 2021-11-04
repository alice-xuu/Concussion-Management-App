import * as React from 'react';
import { Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';

import uiStyle from '../../../components/uiStyle';

function SP1({ navigation }) {
  return (
    <SafeAreaView style={uiStyle.container}>
      <Text style={uiStyle.titleText}>Smooth Pursuits</Text>
      <ScrollView>
        <Text style={uiStyle.text}>
          The affected person will be shown a circle slowly moving from left to
          right. Ask them to keep their head still and follow the circle.
          {'\n'} {'\n'}
          Please allow them to sit down and place the phone landscape at eye
          level, 15cm away away.
        </Text>
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('VOMS Smooth Pursuits 2')}
        style={uiStyle.bottomButton}
      >
        <Text style={uiStyle.buttonLabel}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default SP1;
