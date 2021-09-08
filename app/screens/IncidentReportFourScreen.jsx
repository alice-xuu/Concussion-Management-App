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

function IncidentReportFourScreen({ navigation }) {
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
          <MyCheckbox value="Lying motionless after the event" />
          <Text
            style={styles.checkboxLabel}
          >{`Lying motionless after the event`}</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.checkboxContainer}>
          <MyCheckbox value="Slow to get up after the head knock" />
          <Text
            style={styles.checkboxLabel}
          >{`Slow to get up after the head knock`}</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.checkboxContainer}>
          <MyCheckbox value="Looks stunned or dazed" />
          <Text style={styles.checkboxLabel}>{`Looks stunned or dazed`}</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.checkboxContainer}>
          <MyCheckbox value="Shows behavioural or personality changes" />
          <Text
            style={styles.checkboxLabel}
          >{`Shows behavioural or personality changes`}</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.checkboxContainer}>
          <MyCheckbox value="Forgets things they normally know" />
          <Text
            style={styles.checkboxLabel}
          >{`Forgets things they normally know`}</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.checkboxContainer}>
          <MyCheckbox value="Disorientation or confusion" />
          <Text
            style={styles.checkboxLabel}
          >{`Disorientation or confusion`}</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.checkboxContainer}>
          <MyCheckbox valie="Slowness in responding to questions" />
          <Text
            style={styles.checkboxLabel}
          >{`Slowness in responding to questions`}</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.checkboxContainer}>
          <MyCheckbox value="Forgetting what happened before injury(retrograde memory)" />
          <Text
            style={styles.checkboxLabel}
          >{`Forgetting what happened before injury(retrograde memory)`}</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.checkboxContainer}>
          <MyCheckbox value="Forgetting what happened after injury" />
          <Text
            style={styles.checkboxLabel}
          >{`Forgetting what happened after injury`}</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.checkboxContainer}>
          <MyCheckbox value="Stumbling and/or slow labored movements" />
          <Text
            style={styles.checkboxLabel}
          >{`Stumbling and/or slow labored movements`}</Text>
        </SafeAreaView>
      </SafeAreaView>
      <Text> </Text>
      <TouchableOpacity
        onPress={() => {
          handleCreateMultiResponse(chosenList);
          navigation.navigate('IR 5');
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
    margin: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 1,
    padding: 5,
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
    flex: 1,
    flexWrap: 'wrap',
  },
});

export default IncidentReportFourScreen;
