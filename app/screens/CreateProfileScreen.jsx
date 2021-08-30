import * as React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

/**
 * The screen will ask user to fill in details so their result can be saved in
 * their account.
 */
function CreateProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Enter your details and the results will be saved in your profile
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

export default CreateProfileScreen;
