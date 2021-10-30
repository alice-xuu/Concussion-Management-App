import * as React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import uiStyle from '../../../components/uiStyle';

function VomsTestSp3({ navigation }) {
  return (
    <SafeAreaView style={uiStyle.container}>
      <Text style={uiStyle.text}>
        Please rotate your screen so it's vertical. Ask the affected person to
        follow the circle again
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Voms SP 4')}
        style={uiStyle.bottomButton}
      >
        <Text style={uiStyle.buttonLabel}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  circleContainer: {
    ...uiStyle.contentContainer,
    justifyContent: 'center',
  },
});

export default VomsTestSp3;
