import * as React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import uiStyle from '../../components/uiStyle.jsx';
import { Ionicons } from '@expo/vector-icons';

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

function MTFive({ navigation }) {
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
        style={[styles.checkboxBase, checked && styles.checkboxChecked]}
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
      <SafeAreaView style={styles.allCheckboxContainer}>
        <SafeAreaView style={styles.checkboxContainer}>
          <MyCheckbox value="bird" />
          <Text style={styles.checkboxLabel}>{`bird`}</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.checkboxContainer}>
          <MyCheckbox value={'clock'} />
          <Text style={styles.checkboxLabel}>{`clock`}</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.checkboxContainer}>
          <MyCheckbox value={'cup'} />
          <Text style={styles.checkboxLabel}>{`cup`}</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.checkboxContainer}>
          <MyCheckbox value={'flower'} />
          <Text style={styles.checkboxLabel}>{`flower`}</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.checkboxContainer}>
          <MyCheckbox value={'fork'} />
          <Text style={styles.checkboxLabel}>{`fork`}</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.checkboxContainer}>
          <MyCheckbox value={'keys'} />
          <Text style={styles.checkboxLabel}>{`keys`}</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.checkboxContainer}>
          <MyCheckbox value={'pen'} />
          <Text style={styles.checkboxLabel}>{`pen`}</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.checkboxContainer}>
          <MyCheckbox value={'scissors'} />
          <Text style={styles.checkboxLabel}>{`scissors`}</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.checkboxContainer}>
          <MyCheckbox value={'toothbrush'} />
          <Text style={styles.checkboxLabel}>{`toothbrush`}</Text>
        </SafeAreaView>
      </SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          handleCreateMultiResponse(chosenList);
          navigation.navigate('Home');
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

export default MTFive;