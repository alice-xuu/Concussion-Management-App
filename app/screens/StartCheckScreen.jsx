import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useContext, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import uiStyle from '../components/uiStyle';
import cbStyle from '../components/checkboxStyle';

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
  const [reportId, setReportId] = useContext(ReportIdContext);
  const patientRepoContext = useContext(PatientRepoContext);
  const incidentRepoContext = useContext(IncidentReportRepoContext);

  const [responses, setResponses] = useState(null);

  const handleCreateReport = () => {
    incidentRepoContext.createReport(null).then((id) => setReportId(id));
  };

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
        style={[cbStyle.checkboxBase, checked && cbStyle.checkboxChecked]}
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
        Does the affected person have any of the following symptoms? Please
        select all that apply.
      </Text>
      <ScrollView>
        <SafeAreaView style={cbStyle.allCheckboxContainer}>
          <SafeAreaView style={cbStyle.checkboxContainer}>
            <MyCheckbox value="Neck pain or tenderness" />
            <Text
              style={cbStyle.checkboxLabel}
            >{`Neck pain or tenderness`}</Text>
          </SafeAreaView>
          <SafeAreaView style={cbStyle.checkboxContainer}>
            <MyCheckbox value="Neck pain or tenderness" />
            <Text style={cbStyle.checkboxLabel}>{`Double vision`}</Text>
          </SafeAreaView>
          <SafeAreaView style={cbStyle.checkboxContainer}>
            <MyCheckbox value="Weakness or tingling/burning in the arms or legs" />
            <Text
              style={cbStyle.checkboxLabel}
            >{`Weakness or tingling/burning in the arms or legs`}</Text>
          </SafeAreaView>
          <SafeAreaView style={cbStyle.checkboxContainer}>
            <MyCheckbox value="Severe or increasing headache" />
            <Text
              style={cbStyle.checkboxLabel}
            >{`Severe or increasing headache`}</Text>
          </SafeAreaView>
          <SafeAreaView style={cbStyle.checkboxContainer}>
            <MyCheckbox value="Seizures or convulsions" />
            <Text
              style={cbStyle.checkboxLabel}
            >{`Seizures or convulsions`}</Text>
          </SafeAreaView>
          <SafeAreaView style={cbStyle.checkboxContainer}>
            <MyCheckbox value="Loss of consciousness" />
            <Text style={cbStyle.checkboxLabel}>{`Loss of consciousness`}</Text>
          </SafeAreaView>
          <SafeAreaView style={cbStyle.checkboxContainer}>
            <MyCheckbox value="Deteriorating conscious state" />
            <Text
              style={cbStyle.checkboxLabel}
            >{`Deteriorating conscious state`}</Text>
          </SafeAreaView>
          <SafeAreaView style={cbStyle.checkboxContainer}>
            <MyCheckbox value="Vomiting" />
            <Text style={cbStyle.checkboxLabel}>{`Vomiting`}</Text>
          </SafeAreaView>
          <SafeAreaView style={cbStyle.checkboxContainer}>
            <MyCheckbox value="Increasing restlessness" />
            <Text
              style={cbStyle.checkboxLabel}
            >{`Increasing restlessness`}</Text>
          </SafeAreaView>
          <SafeAreaView style={cbStyle.checkboxContainer}>
            <MyCheckbox value="Agitation or combativeness" />
            <Text
              style={cbStyle.checkboxLabel}
            >{`Agitation or combativeness`}</Text>
          </SafeAreaView>
        </SafeAreaView>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          handleCreateReport();
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

const styles = StyleSheet.create({});

export default StartCheckScreen;
