import * as React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import uiStyle from '../../../components/uiStyle';

function VomsVorOne(props) {
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
          Ask them to keep their head still while moving the phone left to right
          at eye level while following the circle with their eyes.
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Voms Test Vor 2');
        }}
        style={uiStyle.bottomButton}
      >
        <Text style={uiStyle.buttonLabel}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default VomsVorOne;
