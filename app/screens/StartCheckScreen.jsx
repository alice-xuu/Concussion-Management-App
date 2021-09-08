import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useContext, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import uiStyle from '../components/uiStyle';
import {
  IncidentReportRepoContext,
  PatientContext,
  PatientRepoContext,
  ReportIdContext,
} from '../components/GlobalContextProvider';
import * as target from 'react-native';

/**
 * The screen will ask user for details about concussion in checklist form.
 */

function StartCheckScreen({ navigation }) {
  const [patient, setPatient] = useContext(PatientContext);
  const [reportId, setReportId] = useContext(ReportIdContext);
  const patientRepoContext = useContext(PatientRepoContext);
  const incidentRepoContext = useContext(IncidentReportRepoContext);

  const [responses, setResponses] = useState(null);

  const handleCreateMultiResponse = (answers) => {
    const desc = 'Incident Report 4';
    incidentRepoContext
      .addMultiResponse(reportId, desc, answers)
      .then(() => {});
  };

  const MyCheckbox = (props) => {
    const [checked, onChange] = useState(false);

    function onCheckmarkPress() {
      onChange(!checked);
      onUpdate(props.value);
    }

    return (
      <Pressable
        style={[styles.checkboxBase, checked && styles.checkboxChecked]}
        onPress={onCheckmarkPress}
      >
        {checked && <Ionicons name="checkmark" size={24} color="black" />}
      </Pressable>
    );
  };

  function onUpdate(name) {
    let i = chosenList.indexOf(name);
    if (i === -1) {
      chosenList.push(name);
    } else {
      chosenList.splice(i, 1);
    }
    return chosenList;
  }
  const chosenList = [];

  return (
    <SafeAreaView style={uiStyle.container}>
      <Text style={uiStyle.text}>
        Does the patient have any of the following symptoms? Please select all
        that apply.
      </Text>
      <SafeAreaView style={styles.allCheckboxContainer}>
        <SafeAreaView style={styles.checkboxContainer}>
          <MyCheckbox value="Neck pain or tenderness" />
          <Text style={styles.checkboxLabel}>{`Neck pain or tenderness`}</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.checkboxContainer}>
          <MyCheckbox value="Neck pain or tenderness" />
          <Text style={styles.checkboxLabel}>{`Double vision`}</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.checkboxContainer}>
          <MyCheckbox value="Weakness or tingling/burning in the arms or legs" />
          <Text
            style={styles.checkboxLabel}
          >{`Weakness or tingling/burning in the arms or legs`}</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.checkboxContainer}>
          <MyCheckbox value="Severe or increasing headache" />
          <Text
            style={styles.checkboxLabel}
          >{`Severe or increasing headache`}</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.checkboxContainer}>
          <MyCheckbox value="Seizures or convulsions" />
          <Text style={styles.checkboxLabel}>{`Seizures or convulsions`}</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.checkboxContainer}>
          <MyCheckbox value="Loss of consciousness" />
          <Text style={styles.checkboxLabel}>{`Loss of consciousness`}</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.checkboxContainer}>
          <MyCheckbox value="Deteriorating conscious state" />
          <Text
            style={styles.checkboxLabel}
          >{`Deteriorating conscious state`}</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.checkboxContainer}>
          <MyCheckbox value="Vomiting" />
          <Text style={styles.checkboxLabel}>{`Vomiting`}</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.checkboxContainer}>
          <MyCheckbox value="Increasing restlessness" />
          <Text style={styles.checkboxLabel}>{`Increasing restlessness`}</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.checkboxContainer}>
          <MyCheckbox value="Agitation or combativeness" />
          <Text
            style={styles.checkboxLabel}
          >{`Agitation or combativeness`}</Text>
        </SafeAreaView>
      </SafeAreaView>
      <Text> </Text>
      <TouchableOpacity
        onPress={() => {
          handleCreateMultiResponse(chosenList);
          if (chosenList.length === 0) {
            navigation.navigate('Next Steps (IR1)');
          } else {
            navigation.navigate('Check Result');
          }
        }}
        style={uiStyle.bottomButton}
      >
        <Text style={uiStyle.buttonLabel}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  allCheckboxContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    marginHorizontal: 50,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    margin: 1,
  },

  checkboxBase: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'transparent',
  },

  checkboxChecked: {
    backgroundColor: '#C4C4C4',
  },

  checkboxLabel: {
    marginLeft: 8,
    fontWeight: '500',
    fontSize: 14,
  },
});

export default StartCheckScreen;
