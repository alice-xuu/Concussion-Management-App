import * as React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';

import uiStyle from '../components/uiStyle';

function NextStepsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.titleText}>Next Steps</Text>

      <Text style={styles.normalText1}>
        At this stage, the patient presents no symptoms necessitating
        hospitalisation. However, if they do develop any of the previous
        symptoms, immediately call for an ambulance or take them to hospital.
      </Text>

      <Text style={styles.normalText2}>
        The next steps will help determine the best treatment for the patient.
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('SingleChoiceQ (IR2)')}
        style={styles.startButton}
      >
        <Text style={styles.startText}>Start</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const title = '#000000';
const background = '#fff';
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: background,
    justifyContent: 'center',
  },
  titleText: {
    color: title,
    fontSize: 30,
    position: 'absolute',
    top: 60,
    fontWeight: 'bold',
  },
  normalText1: {
    color: title,
    fontSize: 20,
    position: 'absolute',
    left: 30,
    right: 30,
    top: 150,
    fontWeight: 'bold',
  },
  normalText2: {
    color: title,
    fontSize: 20,
    position: 'absolute',
    left: 30,
    right: 30,
    top: 350,
    fontWeight: 'bold',
  },
  startButton: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#ff0000',
    position: 'absolute',
    top: 450,
  },
  startText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default NextStepsScreen;
