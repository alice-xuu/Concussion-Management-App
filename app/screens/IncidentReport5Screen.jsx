import * as React from 'react';
import { Button, StyleSheet, Text, View, Pressable } from 'react-native';

/*
 * Asks user if there is a mechanism of injury
 * Response; Yes, Maybe/Unsure, No.
 */
function IncidentReport5Screen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Is there a mechanism of injury (a clear way the patient could have been
        injured)?
      </Text>

      <View style={styles.sameRow}>
        <Pressable
          style={styles.buttonYes}
          onPress={() => navigation.navigate('Incident Report Result')}
        >
          <Text style={styles.label}>YES</Text>
        </Pressable>

        <Pressable
          style={styles.buttonNo}
          onPress={() => navigation.navigate('Incident Report Result')}
        >
          <Text style={styles.label}>NO</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonYes: {
    width: 125,
    height: 125,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 125,
    backgroundColor: 'green',
  },
  buttonNo: {
    width: 125,
    height: 125,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 125,
    backgroundColor: 'red',
  },
  buttonMaybe: {
    width: 125,
    height: 125,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 125,
    backgroundColor: 'orange',
  },
  label: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  container: {
    flex: 1,
  },

  sameRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  text: {
    fontSize: 30,
    lineHeight: 30,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    color: 'black',
    padding: 20,
  },
});

export default IncidentReport5Screen;
