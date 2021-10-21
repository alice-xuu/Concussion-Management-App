import * as React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import uiStyle from '../../../components/uiStyle';

function VomsSP3({ navigation }) {
  setTimeout(() => {
    navigation.navigate('Voms Test S 5');
  }, 15000);

  return (
    <SafeAreaView style={uiStyle.container}>
      <View style={styles.circleContainer}>
        <View style={uiStyle.vomsCircle} />
      </View>
      <View style={styles.circleContainer}>
        <View style={uiStyle.vomsCircle} />
      </View>
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
