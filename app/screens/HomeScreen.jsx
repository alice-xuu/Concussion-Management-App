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
 * Starting screen that handles navigation to main app flows.
 *
 * @param navigation used to move to the other screens
 */
function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Start Check')}
        style={styles.startCheckButton}
      >
        <Text style={styles.startCheckText}>Start Check</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Documents')}
        style={uiStyle.bottomButton}
      >
        <Text style={uiStyle.buttonLabel}>View History</Text>
      </TouchableOpacity>

      <Text style={styles.titleText}>Concussion Check</Text>

      <Button
        title={'tempButtonToDbSample'}
        onPress={() => navigation.navigate('Database Sample')}
      />
      <Button
        title={'temp Button To create profile'}
        onPress={() => navigation.navigate('Create Profile')}
      />
      <Button
        title={'testing for incident report 4'}
        onPress={() => navigation.navigate('Incident report 4')}
      />
    </SafeAreaView>
  );
}

// https://reactnative.dev/docs/colors
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
  startCheckButton: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: buttons,
  },
  startCheckText: {
    color: text,
    fontWeight: 'bold',
    fontSize: 20,
  },
  titleText: {
    color: title,
    fontSize: 30,
    position: 'absolute',
    top: 60,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
