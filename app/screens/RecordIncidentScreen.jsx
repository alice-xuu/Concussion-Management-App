import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 * Asks user for details about the concussion and gives a suggestion based on
 * the user's responses.
 */
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
