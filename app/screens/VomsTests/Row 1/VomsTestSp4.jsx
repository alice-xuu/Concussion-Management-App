import * as React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import uiStyle from '../../../components/uiStyle';

function VomsTestSp4({ navigation }) {
  return (
    <SafeAreaView style={uiStyle.container}>
      <View style={uiStyle.vomsCircle} />
      <View style={styles.circleContainer}>
        <View style={uiStyle.vomsCircle} />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Voms Response 1')}
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

export default VomsTestSp4;
