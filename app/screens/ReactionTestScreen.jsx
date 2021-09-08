import * as React from 'react';
import { StyleSheet, Text, View, Pressable, SafeAreaView } from 'react-native';

/**
 * The screen will be perform reaction test.
 * This is the second test out of the Further Tests
 * After this test is completed, user needs to navigate to the next test which
 * is Balance Test.
 */
function ReactionTestScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Instruction</Text>
    </SafeAreaView>
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
    backgroundColor: '#fff',
  },
});

export default ReactionTestScreen;
