import * as React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import uiStyle from '../../../components/uiStyle';

function VMSOne(props) {
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
          Ask them to rotate their body left and right 5 times while holding the
          phone at eye level with arms straight while looking at the circle.
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Voms Test ROW5VMS 2');
        }}
        style={uiStyle.bottomButton}
      >
        <Text style={uiStyle.buttonLabel}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default VMSOne;
