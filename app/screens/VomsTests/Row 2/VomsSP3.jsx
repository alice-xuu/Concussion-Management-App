import * as React from 'react';
import { SafeAreaView, TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import uiStyle from '../../../components/uiStyle';

function VomsSP3({ navigation }) {
  return (
    <SafeAreaView style={uiStyle.container}>
      <View style={styles.circleContainer}>
        <View style={uiStyle.vomsCircle} />
      </View>
      <View style={styles.circleContainer}>
        <View style={uiStyle.vomsCircle} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Voms Test SP 4')}>
        <Text>Next</Text>
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

export default VomsSP3;
