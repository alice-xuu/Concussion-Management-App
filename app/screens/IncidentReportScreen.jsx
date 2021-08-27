import * as React from 'react';
import { StyleSheet, Text, View, Pressable} from 'react-native';

/**
 * The step after user has done "StartCheck" if it is not a "BadCheck"
 * User can start recording the incident by answering sets of questions
 * regarding the incident.
 */
function IncidentReportScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Next step</Text>
      <Text style={styles.text}>
        Mechanisms of injury ......................
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default IncidentReportScreen;
