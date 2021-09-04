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

/**
 * The screen will ask user for details about concussion in checklist form.
 */

function MyCheckbox() {
  const [checked, onChange] = useState(false);

  function onCheckmarkPress() {
    onChange(!checked);
  }

  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={onCheckmarkPress}
    >
      {checked && <Ionicons name="checkmark" size={24} color="black" />}
    </Pressable>
  );
}

function IncidentReportFourScreen({ navigation }) {
  return (
    <View style={uiStyle.container}>
      <Text style={uiStyle.text}>
        Does the patient have any of the following symptoms? Please select all
        that apply.
      </Text>
      <View style={styles.allCheckboxContainer}>
        <View style={styles.checkboxContainer}>
          <MyCheckbox />
          <Text
            style={styles.checkboxLabel}
          >{`Lying motionless after the event`}</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <MyCheckbox />
          <Text
            style={styles.checkboxLabel}
          >{`Slow to get up after the head knock`}</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <MyCheckbox />
          <Text
            style={styles.checkboxLabel}
          >{`Looks stunned or dazed`}</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <MyCheckbox />
          <Text
            style={styles.checkboxLabel}
          >{`Shows behavioural or personality changes`}</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <MyCheckbox />
          <Text
            style={styles.checkboxLabel}
          >{`Forgets things they normally know`}</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <MyCheckbox />
          <Text
            style={styles.checkboxLabel}
          >{`Disorientation or confusion`}</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <MyCheckbox />
          <Text
            style={styles.checkboxLabel}
          >{`Slowness in responding to questions`}</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <MyCheckbox />
          <Text
            style={styles.checkboxLabel}
          >{`Forgetting what happened before injury(retrograde memory)`}</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <MyCheckbox />
          <Text
            style={styles.checkboxLabel}
          >{`Forgetting what happened after injury`}</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <MyCheckbox />
          <Text
            style={styles.checkboxLabel}
          >{`Stumbling and/or slow labored movements`}</Text>
        </View>
      </View>
      <Text> </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={uiStyle.nextButton}
      >
        <Text style={uiStyle.buttonText}>Submit</Text>
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
