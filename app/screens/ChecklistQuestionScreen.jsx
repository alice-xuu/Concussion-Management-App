import * as React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { CheckBox } from 'react-native';
import { useContext, useState } from 'react';
import { ReportIdContext } from '../components/GlobalContextProvider';
/**
 * The screen will ask user for details about concussion in checklist form.
 */
function CheckListQuestionScreen({ navigation }) {
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  const [toggleCheckBox3, setToggleCheckBox3] = useState(false);
  const [toggleCheckBox4, setToggleCheckBox4] = useState(false);
  const [toggleCheckBox5, setToggleCheckBox5] = useState(false);
  const [toggleCheckBox6, setToggleCheckBox6] = useState(false);
  const [toggleCheckBox7, setToggleCheckBox7] = useState(false);
  const [toggleCheckBox8, setToggleCheckBox8] = useState(false);
  const [toggleCheckBox9, setToggleCheckBox9] = useState(false);
  const [toggleCheckBox10, setToggleCheckBox10] = useState(false);
  const [incidentRepo, setIncidientRepo] = useState(null);
  const responses = [];

  const handleCreateMultiResponse = () => {
    const desc = 'Checklist questionnaire 1';

    function setResponses() {
      if (toggleCheckBox1 === true) {
        responses.push(toggleCheckBox1);
      }
      if (toggleCheckBox2 === true) {
        responses.push(toggleCheckBox2);
      }
      if (toggleCheckBox3 === true) {
        responses.push(toggleCheckBox3);
      }
      if (toggleCheckBox4 === true) {
        responses.push(toggleCheckBox4);
      }
      if (toggleCheckBox5 === true) {
        responses.push(toggleCheckBox5);
      }
      if (toggleCheckBox6 === true) {
        responses.push(toggleCheckBox6);
      }
      if (toggleCheckBox7 === true) {
        responses.push(toggleCheckBox7);
      }
      if (toggleCheckBox8 === true) {
        responses.push(toggleCheckBox8);
      }
      if (toggleCheckBox9 === true) {
        responses.push(toggleCheckBox9);
      }
      if (toggleCheckBox10 === true) {
        responses.push(toggleCheckBox10);
      }
      return responses;
    }

    incidentRepo.addMultiResponse(1, desc, responses).then(
      () => {
        incidentRepo.getMultiResponses(1).then((mrs) => setResponses());
      },
      (err) => console.log(err),
    );
  };
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
      <View style={styles.checkboxContainer}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox2}
          onValueChange={(newValue) => setToggleCheckBox2(newValue)}
        />
        <Text> Double vision</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox3}
          onValueChange={(newValue) => setToggleCheckBox3(newValue)}
        />
        <Text> Weakness or tingling/burning in the arms or legs</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox4}
          onValueChange={(newValue) => setToggleCheckBox4(newValue)}
        />
        <Text> Severe or increasing headache</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox5}
          onValueChange={(newValue) => setToggleCheckBox5(newValue)}
        />
        <Text> Seizures or convulsions</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox6}
          onValueChange={(newValue) => setToggleCheckBox6(newValue)}
        />
        <Text> Loss of consciousness</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox7}
          onValueChange={(newValue) => setToggleCheckBox7(newValue)}
        />
        <Text> Deteriorating conscious state</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox8}
          onValueChange={(newValue) => setToggleCheckBox8(newValue)}
        />
        <Text> Vomiting</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox9}
          onValueChange={(newValue) => setToggleCheckBox9(newValue)}
        />
        <Text> Increasing restlessness</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox10}
          onValueChange={(newValue) => setToggleCheckBox10(newValue)}
        />
        <Text> Agitation or combativeness</Text>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate('Injury Sus (IR5)');
          handleCreateMultiResponse();
        }}
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
