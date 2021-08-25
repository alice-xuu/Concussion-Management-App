import * as React from 'react';
import { Button, Text, View, StyleSheet, Pressable } from "react-native";

/**
 * Starting screen that handles navigation to main app flows.
 *
 * @param navigation used to move to the other screens
 */
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Concussion Check</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Record Incident questionnaire 1')}
      >
        <Text style={styles.label}>Record Incident</Text>
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
    backgroundColor: 'red',
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
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    marginHorizontal: 50,
    marginVertical: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
