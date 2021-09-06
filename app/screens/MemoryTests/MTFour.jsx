import * as React from 'react';
import { useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';

import uiStyle from '../../components/uiStyle.jsx';
import { Ionicons } from '@expo/vector-icons';

/**
 * The screen will be perform memory test.
 * This is the first test out of the Further Tests
 * After this test is completed, user needs to navigate to the next test which
 * is Reaction Test.
 */

function MTFour({ navigation }) {
  function MyCheckbox() {
    const [checked, onChange] = useState(false);
    function onCheckmarkPress() {
      onChange(!checked);
      if (!checked) {
        insertSelection();
      }
      //if (!checked) {
      //  removeSelection();
      //}
    }
    function insertSelection() {
      setArray((array) => [...array.selected, 'test']);
    }
    function removeSelection() {
      var arr = [...this.array.selected]; // make a separate copy of the array
      var index = arr.indexOf('test');
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
  }

  const [array, setArray] = useState({ selected: ['test'] });

  return (
    <View style={uiStyle.container}>
      <Text style={uiStyle.text}>
        What three images does your patient remember?
      </Text>

      <View style={styles.allCheckboxContainer}>
        <View style={styles.checkboxContainer}>
          <MyCheckbox choice="bird" />
          <Text style={styles.checkboxLabel}>{`bird`}</Text>
        </View>

        <View style={styles.checkboxContainer}>
          <MyCheckbox />
          <Text style={styles.checkboxLabel}>{`clock`}</Text>
        </View>

        <View style={styles.checkboxContainer}>
          <MyCheckbox />
          <Text style={styles.checkboxLabel}>{`cup`}</Text>
        </View>

        <View style={styles.checkboxContainer}>
          <MyCheckbox />
          <Text style={styles.checkboxLabel}>{`flower`}</Text>
        </View>

        <View style={styles.checkboxContainer}>
          <MyCheckbox />
          <Text style={styles.checkboxLabel}>{`fork`}</Text>
        </View>

        <View style={styles.checkboxContainer}>
          <MyCheckbox />
          <Text style={styles.checkboxLabel}>{`keys`}</Text>
        </View>

        <View style={styles.checkboxContainer}>
          <MyCheckbox />
          <Text style={styles.checkboxLabel}>{`pen`}</Text>
        </View>

        <View style={styles.checkboxContainer}>
          <MyCheckbox />
          <Text style={styles.checkboxLabel}>{`scissors`}</Text>
        </View>

        <View style={styles.checkboxContainer}>
          <MyCheckbox />
          <Text style={styles.checkboxLabel}>{`toothbrush`}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={uiStyle.bottomButton}
      >
        <Text style={uiStyle.buttonLabel}>Submit</Text>
      </TouchableOpacity>

      <Text>{array.selected}</Text>
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
