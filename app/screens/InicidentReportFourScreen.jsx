import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
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
    incidentRepoContext.addMultiResponse(reportId, desc, answers).then(
      () => {
        incidentRepoContext
          .getMultiResponses(reportId)
          .then((mrs) => setResponses(JSON.stringify(mrs)));
      },
      (err) => console.log(err),
    );
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
    <View style={uiStyle.container}>
      <Text style={uiStyle.text}>
        Does the patient have any of the following symptoms? Please select all
        that apply.
      </Text>
      <View style={styles.allCheckboxContainer}>
        <View style={styles.checkboxContainer}>
          <MyCheckbox value="Lying motionless after the event" />
          <Text
            style={styles.checkboxLabel}
          >{`Lying motionless after the event`}</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <MyCheckbox value="Slow to get up after the head knock" />
          <Text
            style={styles.checkboxLabel}
          >{`Slow to get up after the head knock`}</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <MyCheckbox value="Looks stunned or dazed" />
          <MyCheckbox />
          <Text style={styles.checkboxLabel}>{`Looks stunned or dazed`}</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <MyCheckbox value="Shows behavioural or personality changes" />
          <Text
            style={styles.checkboxLabel}
          >{`Shows behavioural or personality changes`}</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <MyCheckbox value="Forgets things they normally know" />
          <Text
            style={styles.checkboxLabel}
          >{`Forgets things they normally know`}</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <MyCheckbox value="Disorientation or confusion" />
          <Text
            style={styles.checkboxLabel}
          >{`Disorientation or confusion`}</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <MyCheckbox valie="Slowness in responding to questions" />
          <Text
            style={styles.checkboxLabel}
          >{`Slowness in responding to questions`}</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <MyCheckbox value="Forgetting what happened before injury(retrograde memory)" />
          <Text
            style={styles.checkboxLabel}
          >{`Forgetting what happened before injury(retrograde memory)`}</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <MyCheckbox value="Forgetting what happened after injury" />
          <Text
            style={styles.checkboxLabel}
          >{`Forgetting what happened after injury`}</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <MyCheckbox value="Stumbling and/or slow labored movements" />
          <Text
            style={styles.checkboxLabel}
          >{`Stumbling and/or slow labored movements`}</Text>
        </View>
      </View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  allCheckboxContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    fontSize: 18,
  },
});

export default IncidentReportFourScreen;
