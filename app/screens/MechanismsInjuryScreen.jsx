import * as React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';

import uiStyle from '../components/uiStyle';

/**
 * Users are directed to this screen if they do not show any immediate post-injury symptons.
 * This is "Incident Report 1" in the wireframes
 */

function MechanismsInjuryScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>

      <Text style={styles.titleText}>Next Steps</Text>

      <Text style={styles.normalText}>Mechanisms of injury blah blah blah</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('SingleChoiceQ (IR2)')}
        style={uiStyle.bottomButton}
      >
        <Text style={uiStyle.buttonLabel}>Start</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const title = '#000000';
const text = '#fff';
const background = '#fff';
const buttons = '#ff0000';
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
  normalText: {
    color: title,
    fontSize: 20,
    position: 'absolute',
    top: 150,
    fontWeight: 'bold',
  }
});

export default MechanismsInjuryScreen;
