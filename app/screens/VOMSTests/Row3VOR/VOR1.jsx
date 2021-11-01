import * as React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import uiStyle from '../../../components/uiStyle';

function VOR1(props) {
  return (
    <SafeAreaView style={uiStyle.container}>
      <View style={uiStyle.contentContainerCentered}>
        <Text style={uiStyle.text}>Vestibular Ocular Reflex</Text>
        <Text style={uiStyle.text}>Instructions</Text>
        <Text style={uiStyle.text}>
          The affected person will be shown a fixed circle in the center of the
          screen.
        </Text>
        <Text style={uiStyle.text}>
          Ask them to hold the phone in front of them and rotate their head left
          and right 10 times while keeping their eyes on the circle.
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('VOMS VOR 2');
        }}
        style={uiStyle.bottomButton}
      >
        <Text style={uiStyle.buttonLabel}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default VOR1;