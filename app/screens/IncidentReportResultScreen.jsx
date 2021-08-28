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
  return (
    <View style={styles.container}>
      <Text>Result</Text>
      <Text style={styles.text}>
        Your patient ...............................
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

export default IncidentReportResultScreen;
