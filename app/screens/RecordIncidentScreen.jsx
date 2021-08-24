import * as React from 'react';
import { Button, StyleSheet, Text, View, Pressable } from 'react-native';

/**
 * Asks user for details about the concussion and gives a suggestion based on
 * the user's responses.
 */
function RecordIncidentScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Record Incident Screen</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Result')}
      >
        <Text style={styles.label}>Result</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.label}>Home</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'black',
    marginHorizontal: 50,
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RecordIncidentScreen;
