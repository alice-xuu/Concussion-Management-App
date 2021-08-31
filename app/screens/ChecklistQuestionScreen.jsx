import * as React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { CheckBox } from 'react-native-web';
import { useState } from 'react';

/**
 * The screen will ask user for details about concussion in checklist form.
 */
function CheckListQuestionScreen({ navigation }) {
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  return (
    <View style={styles.container}>
      <Text>
        Does the patient have any of the following symptoms? Please select all
        that apply.
      </Text>
      <Text> </Text>
      <View style={styles.checkboxContainer}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox1}
          onValueChange={(newValue) => setToggleCheckBox1(newValue)}
        />
        <Text> Neck pain or tenderness</Text>
      </View>
      <Text>
        Do you have the first symptom?: {toggleCheckBox1 ? '✅' : '❌'}
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Injury Sus (IR5)')}
      >
        <Text style={styles.label}>Submit</Text>
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
    backgroundColor: 'red',
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
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
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

export default CheckListQuestionScreen;
