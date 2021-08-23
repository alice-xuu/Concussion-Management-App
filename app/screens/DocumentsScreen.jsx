import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function DocumentsScreen() {
  return (
    <View style={styles.container}>
      <Text>Documents Screen</Text>
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

export default DocumentsScreen;
