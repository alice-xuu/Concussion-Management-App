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

  const [index, setIndex] = useState(0);

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

  return (
    <View style={uiStyle.container}>
      <Text style={uiStyle.text}>{arr}</Text>

      <Text style={uiStyle.text}>{threeImages[index].title}</Text>
      <Image
        style={{ width: 300, height: 300, resizeMode: 'contain' }}
        source={threeImages[index].src}
      />
      <TouchableOpacity
        onPress={() => {
          if (index >= 2) {
            navigation.navigate('Home');
          } else {
            if (index < arr.length - 1) {
              setIndex(index + 1);
            }
          }
        }}
        style={uiStyle.nextButton}
      >
        <Text style={uiStyle.buttonText}>Next Image</Text>
      </TouchableOpacity>
    </View>
  );
}

export default MTTwo;
