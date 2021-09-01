import * as React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

/**
 * Shows result and gives a suggestion based on
 * the user's responses.
 */
function BadCheckScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Result</Text>
      <Text style={styles.text}>
        Your patient needs to go to hospital immediately, please call 000 now.
      </Text>
      <Pressable disable={true} style={styles.callSymbol}>
        <Text style={styles.label}>Call 000</Text>
     </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Create Profile')}
      >
        <Text style={styles.label}>Next</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  callSymbol: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 100,
    backgroundColor: 'red',
    marginHorizontal: 50,
    marginVertical: 10,
  },
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

export default BadCheckScreen;
