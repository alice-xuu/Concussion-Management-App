import * as React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { CheckBox } from 'react-native-web';
import { useState } from 'react';

/**
 * The screen will ask user for details about concussion in checklist form.
 */
function CheckListQuestionScreen({ navigation }) {
  const [firstIsSelected, firstSetSelection] = useState(false);
  const [secondIsSelected, secondSetSelection] = useState(false);
  const [thirdIsSelected, thirdSetSelection] = useState(false);
  const [fourthIsSelected, fourthSetSelection] = useState(false);
  const [fifthIsSelected, fifthSetSelection] = useState(false);
  const [sixthIsSelected, sixthSetSelection] = useState(false);
  const [seventhIsSelected, seventhSetSelection] = useState(false);
  const [eighthIsSelected, eighthSetSelection] = useState(false);
  const [ninthIsSelected, ninthSetSelection] = useState(false);
  const [tenthIsSelected, tenthSetSelection] = useState(false);
  return (
    <View style={styles.container}>
      <Text>
        Does the patient have any of the following symptoms? Please select all
        that apply.
      </Text>
      <Text> </Text>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={firstIsSelected}
          onValueChange={firstSetSelection}
          style={styles.checkbox}
        />
        <Text> Neck pain or tenderness</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={secondIsSelected}
          onValueChange={secondSetSelection}
          style={styles.checkbox}
        />
        <Text> Double vision</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={thirdIsSelected}
          onValueChange={thirdSetSelection}
          style={styles.checkbox}
        />
        <Text> Weakness or tingling/burning in the arms or legs</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={fourthIsSelected}
          onValueChange={fourthSetSelection}
          style={styles.checkbox}
        />
        <Text> Severe or increasing headache</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={fifthIsSelected}
          onValueChange={fifthSetSelection}
          style={styles.checkbox}
        />
        <Text> Seizures or convulsions</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={sixthIsSelected}
          onValueChange={sixthSetSelection}
          style={styles.checkbox}
        />
        <Text> Loss of consciousness</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={seventhIsSelected}
          onValueChange={seventhSetSelection}
          style={styles.checkbox}
        />
        <Text> Deteriorating conscious state</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={eighthIsSelected}
          onValueChange={eighthSetSelection}
          style={styles.checkbox}
        />
        <Text> Vomiting</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={ninthIsSelected}
          onValueChange={ninthSetSelection}
          style={styles.checkbox}
        />
        <Text> Increasing restlessness</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={tenthIsSelected}
          onValueChange={tenthSetSelection}
          style={styles.checkbox}
        />
        <Text> Agitation or combativeness</Text>
      </View>
      <Text>
        Do you have the first symptom?: {firstIsSelected ? '✅' : '❌'}
      </Text>
      <Text>
        Do you have the second symptom?: {secondIsSelected ? '✅' : '❌'}
      </Text>
      <Text>
        Do you have the third symptom?: {thirdIsSelected ? '✅' : '❌'}
      </Text>
      <Text>
        Do you have the fourth symptom?: {fourthIsSelected ? '✅' : '❌'}
      </Text>
      <Text>
        Do you have the fifth symptom?: {fifthIsSelected ? '✅' : '❌'}
      </Text>
      <Text>
        Do you have the sixth symptom?: {sixthIsSelected ? '✅' : '❌'}
      </Text>
      <Text>
        Do you have the seventh symptom?: {seventhIsSelected ? '✅' : '❌'}
      </Text>
      <Text>
        Do you have the eighth symptom?: {eighthIsSelected ? '✅' : '❌'}
      </Text>
      <Text>
        Do you have the ninth symptom?: {ninthIsSelected ? '✅' : '❌'}
      </Text>
      <Text>
        Do you have the tenth symptom?: {tenthIsSelected ? '✅' : '❌'}
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Record Incident questionnaire 2')}
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
