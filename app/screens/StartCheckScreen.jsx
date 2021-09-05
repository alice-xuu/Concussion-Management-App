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

function StartCheckScreen({ navigation }) {
  return (
    <View style={uiStyle.container}>
      <Text style={uiStyle.text}>
        Does the patient have any of the following symptoms? Please select all
        that apply.
      </Text>
      <View style={styles.allCheckboxContainer}>
        <View style={styles.checkboxContainer}>
          <MyCheckbox />
          <Text style={styles.checkboxLabel}>{`Neck pain or tenderness`}</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <MyCheckbox />
          <Text style={styles.checkboxLabel}>{`Double vision`}</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <MyCheckbox />
          <Text
            style={styles.checkboxLabel}
          >{`Weakness or tingling/burning in the arms or legs`}</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <MyCheckbox />
          <Text
            style={styles.checkboxLabel}
          >{`Severe or increasing headache`}</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <MyCheckbox />
          <Text style={styles.checkboxLabel}>{`Seizures or convulsions`}</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <MyCheckbox />
          <Text style={styles.checkboxLabel}>{`Loss of consciousness`}</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <MyCheckbox />
          <Text
            style={styles.checkboxLabel}
          >{`Deteriorating conscious state`}</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <MyCheckbox />
          <Text style={styles.checkboxLabel}>{`Vomiting`}</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <MyCheckbox />
          <Text style={styles.checkboxLabel}>{`Increasing restlessness`}</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <MyCheckbox />
          <Text
            style={styles.checkboxLabel}
          >{`Agitation or combativeness`}</Text>
        </View>
      </View>
      <Text> </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Mechanisms of Injury')}
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
    marginHorizontal: 50,
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

export default StartCheckScreen;
