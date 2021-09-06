import * as React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
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
    incidentRepoContext.addMultiResponse(reportId, desc, res).then(
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
    //const name = value.target.value();
    function onCheckmarkPress() {
      //if (!checked) {
      //  removeSelection();
      //}

      // insertSelection();
      onChange(!checked);
      onUpdate(props.value);
    }

    function insertSelection(selected) {
      // insert selected if not in array, if in array, remove
      var arr = [array.selected]; // make a separate copy of the array
      var index = arr.indexOf('new');

      if (index === -1) {
        setArray((array) => ({
          selected: [...array.selected, 'new'],
        }));
      } else {
        arr.splice(index, 1);
        setArray((array) => ({ selected: [arr] }));
      }
    }

    function removeSelection() {
      var arr = [...array.selected]; // make a separate copy of the array
      var index = arr.indexOf('try');
      if (index !== -1) {
        arr.splice(index, 1);
        this.setArray({ arr });
      }
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
  function onUpdate(name) {
    let index = chosenList.indexOf(name);
    if (index === -1) {
      chosenList.push(name); // if it isn't stored add it to the array
    } else {
      chosenList.splice(index, 1); // if it is stored then remove it from the array
    }
    return { chosenList };
  }

  const [array, setArray] = useState({ selected: ['test'] });

  const chosenList = [];

  function addToList() {}

  function insertSelection(name) {
    // insert selected if not in array, if in array, remove
    var arr = [array.selected]; // make a separate copy of the array
    var index = arr.indexOf(name);

    if (index === -1) {
      setArray((array) => ({
        selected: [...array.selected, name],
      }));
    } else {
      arr.splice(index, 1);
      setArray((array) => ({ selected: [arr] }));
    }
  }

  return (
    <View style={uiStyle.container}>
      <Text style={uiStyle.text}>
        What three images does your patient remember?
      </Text>
      <View style={styles.allCheckboxContainer}>
        <View style={styles.checkboxContainer}>
          <MyCheckbox value="bird" />
          <Text style={styles.checkboxLabel}>{`bird`}</Text>
        </View>

        <View style={styles.checkboxContainer}>
          <MyCheckbox value={'clock'} />
          <Text style={styles.checkboxLabel}>{`clock`}</Text>
        </View>

        <View style={styles.checkboxContainer}>
          <MyCheckbox value={'cup'} />
          <Text style={styles.checkboxLabel}>{`cup`}</Text>
        </View>

        <View style={styles.checkboxContainer}>
          <MyCheckbox value={'flower'} />
          <Text style={styles.checkboxLabel}>{`flower`}</Text>
        </View>

        <View style={styles.checkboxContainer}>
          <MyCheckbox value={'fork'} />
          <Text style={styles.checkboxLabel}>{`fork`}</Text>
        </View>

        <View style={styles.checkboxContainer}>
          <MyCheckbox value={'keys'} />
          <Text style={styles.checkboxLabel}>{`keys`}</Text>
        </View>

        <View style={styles.checkboxContainer}>
          <MyCheckbox value={'pen'} />
          <Text style={styles.checkboxLabel}>{`pen`}</Text>
        </View>

        <View style={styles.checkboxContainer}>
          <MyCheckbox value={'scissors'} />
          <Text style={styles.checkboxLabel}>{`scissors`}</Text>
        </View>

        <View style={styles.checkboxContainer}>
          <MyCheckbox value={'toothbrush'} />
          <Text style={styles.checkboxLabel}>{`toothbrush`}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          handleCreateMultiResponse(chosenList);
          //navigation.navigate('Home');
        }}
        style={uiStyle.bottomButton}
      >
        <Text style={uiStyle.buttonLabel}>Submit</Text>
      </TouchableOpacity>
      <Text>{responses}</Text>

      <Text>{array.selected}</Text>

      <Text>{chosenList}</Text>
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

export default MTFour;
