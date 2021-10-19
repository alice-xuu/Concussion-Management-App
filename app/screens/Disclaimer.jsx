import * as React from 'react';
import { Text, SafeAreaView, TouchableOpacity } from 'react-native';
import uiStyle from '../components/uiStyle';

function Disclaimer({ navigation }) {
  return (
    <SafeAreaView style={uiStyle.container}>
      <Text style={uiStyle.text}>
        This App does not represent a substitute for expert medical attention.
        You must not rely on the information on this App as an alternative to
        medical advice from your doctor or other professional healthcare
        provider. We strongly recommend that you consult your own physician or
        another available health professional regarding any diagnosis, findings,
        interpretation or course of treatment.
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Voms Start')}
        style={uiStyle.startCheckButton}
      >
        <Text style={uiStyle.buttonLabel}>I understand</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Disclaimer;
