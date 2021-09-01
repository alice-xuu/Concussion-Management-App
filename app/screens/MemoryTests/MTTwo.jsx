import * as React from 'react';
import { useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Image,
} from 'react-native';

import uiStyle from '../../components/uiStyle';
import MTImages from '../../../assets/MemoryTestResources/MTImages';

/**
 * The screen will be perform memory test.
 * This is the first test out of the Further Tests
 * After this test is completed, user needs to navigate to the next test which
 * is Reaction Test.
 */

function MTTwo({ navigation }) {
  const arr = [];
  const threeImages = [];

  function generate3Images(arr) {
    while (arr.length < 3) {
      const r = Math.floor(Math.random() * 8) + 1;
      if (arr.indexOf(r) === -1) {
        arr.push(r);
        threeImages.push(MTImages[r]);
      }
    }
    return arr;
  }

  generate3Images(arr);

  const [state, setState] = useState({ index: 0, imgs: threeImages });
  const { index, imgs } = state;

  return (
    <View style={uiStyle.container}>
      <Text style={styles.text}>{imgs[index].title}</Text>
      <Image
        style={{ width: 300, height: 300, resizeMode: 'contain' }}
        source={imgs[index].src}
      />

      <TouchableOpacity
        onPress={() => {
          if (index >= 2) {
            navigation.navigate('Memory Test 3');
          } else {
            if (index < arr.length - 1) {
              setState({ ...state, index: index + 1 });
            }
          }
        }}
        style={uiStyle.nextButton}
      >
        <Text style={uiStyle.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    lineHeight: 25,
    letterSpacing: 0.3,
    marginHorizontal: 50,
    marginVertical: 10,
  },
});

export default MTTwo;
