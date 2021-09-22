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

import uiStyle from '../../components/uiStyle.jsx';
import { Ionicons } from '@expo/vector-icons';
import cbStyle from '../../components/checkboxStyle';

import { useContext, useState } from 'react';

import {
  IncidentReportRepoContext,
  PatientContext,
  PatientRepoContext,
  ReportIdContext,
} from '../../components/GlobalContextProvider';
import * as target from 'react-native';

/**
 * The screen will be perform memory test.
 * This is the first test out of the Further Tests
 * After this test is completed, user needs to navigate to the next test which
 * is Reaction Test.
 */

function MTFour({ navigation }) {
  // Context variables
  const [patient, setPatient] = useContext(PatientContext);
  const [reportId, setReportId] = useContext(ReportIdContext);
  const patientRepoContext = useContext(PatientRepoContext);
  const incidentRepoContext = useContext(IncidentReportRepoContext);

  // Local state
  const [responses, setResponses] = useState(null);

  const handleCreateMultiResponse = (res) => {
    const desc = 'Memory Test Part 1';
    incidentRepoContext.addMultiResponse(reportId, desc, res).then(() => {});
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
        onPress={() => {
          onCheckmarkPress();
        }}
      >
        {checked && <Ionicons name="checkmark" size={24} color="black" />}
      </Pressable>
    );
  };

  // updates const list when onCheckmarkPress() is called
  function onUpdate(name) {
    let index = chosenList.indexOf(name);
    if (index === -1) {
      chosenList.push(name); // if it isn't stored add it to the array
    } else {
      chosenList.splice(index, 1); // if it is stored then remove it from the array
    }
    return { chosenList };
  }

  const chosenList = [];

  return (
    <SafeAreaView style={uiStyle.container}>
      <Text style={uiStyle.text}>
        What three images does your patient remember?
      </Text>
      <ScrollView>
        <SafeAreaView style={cbStyle.allCheckboxContainer}>
          <SafeAreaView style={cbStyle.checkboxContainer}>
            <MyCheckbox value="bird" />
            <Text style={cbStyle.checkboxLabel}>{`bird`}</Text>
          </SafeAreaView>

          <SafeAreaView style={cbStyle.checkboxContainer}>
            <MyCheckbox value={'clock'} />
            <Text style={cbStyle.checkboxLabel}>{`clock`}</Text>
          </SafeAreaView>

          <SafeAreaView style={cbStyle.checkboxContainer}>
            <MyCheckbox value={'cup'} />
            <Text style={cbStyle.checkboxLabel}>{`cup`}</Text>
          </SafeAreaView>

          <SafeAreaView style={cbStyle.checkboxContainer}>
            <MyCheckbox value={'flower'} />
            <Text style={cbStyle.checkboxLabel}>{`flower`}</Text>
          </SafeAreaView>

          <SafeAreaView style={cbStyle.checkboxContainer}>
            <MyCheckbox value={'fork'} />
            <Text style={cbStyle.checkboxLabel}>{`fork`}</Text>
          </SafeAreaView>

          <SafeAreaView style={cbStyle.checkboxContainer}>
            <MyCheckbox value={'keys'} />
            <Text style={cbStyle.checkboxLabel}>{`keys`}</Text>
          </SafeAreaView>

          <SafeAreaView style={cbStyle.checkboxContainer}>
            <MyCheckbox value={'pen'} />
            <Text style={cbStyle.checkboxLabel}>{`pen`}</Text>
          </SafeAreaView>

          <SafeAreaView style={cbStyle.checkboxContainer}>
            <MyCheckbox value={'scissors'} />
            <Text style={cbStyle.checkboxLabel}>{`scissors`}</Text>
          </SafeAreaView>

          <SafeAreaView style={cbStyle.checkboxContainer}>
            <MyCheckbox value={'toothbrush'} />
            <Text style={cbStyle.checkboxLabel}>{`toothbrush`}</Text>
          </SafeAreaView>
        </SafeAreaView>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          handleCreateMultiResponse(chosenList);
          navigation.navigate('Reaction Test 1');
        }}
        style={uiStyle.bottomButton}
      >
        <Text style={uiStyle.buttonLabel}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default MTFour;
