import * as React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import uiStyle from '../../../components/uiStyle';

function VMS1(props) {
  return (
    <SafeAreaView style={uiStyle.container}>
      <View style={uiStyle.contentContainerCentered}>
        <Text style={uiStyle.text}>Visual Motion Sensitivity</Text>
        <Text style={uiStyle.text}>Instructions</Text>
        <Text style={uiStyle.text}>
          The affected person will be shown a fixed circle in the center of the
          screen.
        </Text>
        <Text style={uiStyle.text}>
          Ask them to hold the phone at eye level with arms straight in front.
          While looking at the circle, on the beat, turn 80 degrees right, back
          to the middle, turn 80 degrees left, back to the middle. Repeat 5
          times.
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('VOMS VMS 2');
        }}
        style={uiStyle.bottomButton}
      >
        <Text style={uiStyle.buttonLabel}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default VMS1;
