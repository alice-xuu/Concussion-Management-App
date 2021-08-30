import * as React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

/**
 * The screen will show the result after user has completed "IncidentReport"
 * The screen will either be:
 * patient needs to go to GP ASAP,
 * or
 * do further test to assess concussion or go to home and create profile
 */
function IncidentReportResultScreen({ navigation }) {
  //const { ReportResult } = route.params;
  const ReportResult = -1;
  let screen;
  if (ReportResult > 0) {
    //Have Concussion
    screen = (
      <View>
        <Text style={styles.text}>
          Your patient can not return to play.{'\n'} {'\n'}
          Must see a GP within the next 24 hours.{'\n'} {'\n'}If they develop
          any of the following symptoms.....
        </Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Create Profile')}
        >
          <Text style={styles.label}>Next</Text>
        </Pressable>
      </View>
    );
  } else {
    screen = (
      <View>
        <Text style={styles.text}>
          Your patient can return to play, provided they have had none of the
          signs or symptoms seen previously.{'\n'} {'\n'}
          If they have, please do not allow return to play, and see a GP in the
          next 24 hours.
        </Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Create Profile')}
        >
          <Text style={styles.label}>Home</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Reaction Test')}
        >
          <Text style={styles.label}>Further Test</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Result</Text>
      {screen}
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
  text: {
    fontSize: 20,
    lineHeight: 30,
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

export default IncidentReportResultScreen;
