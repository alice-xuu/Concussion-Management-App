import * as React from 'react';
import { Button, StyleSheet, Text, View, Pressable } from 'react-native';

/*
 * Asks user if there is a mechanism of injury
 * Response; Yes, Maybe/Unsure, No.
 */
function SingleChoiceQuestionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>
        Is there a mechanism of injury (a clear way the patient could have been
        injured)?
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Result')}
      >
        <Text style={styles.label}>Yes</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Result')}
      >
        <Text style={styles.label}>MAYBE/UNSURE</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Result')}
      >
        <Text style={styles.label}>NO</Text>
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

export default SingleChoiceQuestionScreen;
