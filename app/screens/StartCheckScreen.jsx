import * as React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

/**
 * The start check screen after user pressed start check in the home screen
 * This screen contains the checkboxes of symptoms
 * After user finish ticking the boxes, user can press the "Submit" button and
 * navigate to either "BadCheckScreen" or "IncidentReportScreen".
 */
function StartCheckScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Post-injury Symptoms</Text>
      <Text style={styles.text}>
        Does the Patient have any of the following? Please select all that apply.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
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

export default StartCheckScreen;
