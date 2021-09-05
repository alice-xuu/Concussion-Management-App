import * as React from 'react';
import { Button, StyleSheet, Text, View, Pressable } from 'react-native';
import uiStyle from '../components/uiStyle';

/*
 * Asks user if there is a mechanism of injury
 * Response; Yes, Maybe/Unsure, No.
 */
function IncidentReportFiveScreen({ navigation }) {
  return (
    <View style={uiStyle.container}>
      <Text style={uiStyle.text}>
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
    margin: 10,
  },
  buttonNo: {
    width: 125,
    height: 125,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 125,
    backgroundColor: 'red',
    margin: 10,
  },

  label: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
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

export default IncidentReportFiveScreen;
