import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

/**
 * Starting screen that handles navigation to main app flows.
 *
 * @param navigation used to move to the other screens
 */
function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={[styles.screen]}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Record Incident')}
        style={styles.startCheckButton}
      >
        <Text style={styles.startCheckText}>Start Check</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Documents')}
        style={styles.viewHistoryButton}
      >
        <Text style={styles.viewHistoryText}>View History</Text>
      </TouchableOpacity>

      <Text style={styles.titleText}>Concussion Check</Text>
    </SafeAreaView>
  );
}

// https://reactnative.dev/docs/colors
const title = '#000000';
const text = '#fff';
const background = '#fff';
const buttons = '#fc5c65';
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
    fontSize: 26,
  },
  titleText: {
    color: title,
    fontSize: 30,
    position: 'absolute',
    top: 60,
    fontWeight: 'bold',
  },
  viewHistoryButton: {
    width: 300,
    height: 50,
    padding: 10,
    borderRadius: 100,
    backgroundColor: buttons,
    position: 'absolute',
    bottom: 90,
  },
  viewHistoryText: {
    color: text,
    fontSize: 22,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default HomeScreen;
