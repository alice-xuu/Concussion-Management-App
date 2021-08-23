import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function RecordIncidentScreen() {
  return (
    <View style={styles.container}>
      <Text>Record Incident Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RecordIncidentScreen;
