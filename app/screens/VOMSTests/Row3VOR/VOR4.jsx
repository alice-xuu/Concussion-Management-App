import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import uiStyle from '../../../components/uiStyle';

function VOR4(props) {
  return (
    <SafeAreaView style={uiStyle.container}>
      <View style={uiStyle.contentContainerCentered}>
        <ScrollView>
          <Text style={uiStyle.text}>Vestibular Ocular Reflex (Vertical)</Text>
          <Text style={uiStyle.text}>
            Ask them to hold the phone in front of them and rotate their head up
            and down 10 times while keeping their eyes on the circle.
          </Text>
        </ScrollView>
      </View>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('VOMS VOR 5');
        }}
        style={uiStyle.bottomButton}
      >
        <Text style={uiStyle.buttonLabel}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default VOR4;
