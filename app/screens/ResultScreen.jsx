import * as React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

/**
 * Shows result and gives a suggestion based on
 * the user's responses.
 */
function ResultScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Result</Text>
      <Text style={styles.text}>
        Your patient needs to go to hospital immediately, please call 000 now.
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.label}>Back</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.label}>Home</Text>
      </Pressable>
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

export default ResultScreen;
