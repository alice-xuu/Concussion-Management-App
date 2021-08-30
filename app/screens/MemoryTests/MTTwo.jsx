import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Image,
} from 'react-native';

import uiStyle from '../../components/uiStyle';

/**
 * The screen will be perform memory test.
 * This is the first test out of the Further Tests
 * After this test is completed, user needs to navigate to the next test which
 * is Reaction Test.
 */
function MTTwo({ navigation }) {
  const images = [
    {
      id: 1,
      src: require('../../../assets/MemoryTestResources/bird.jpg'),
      title: 'bird',
    },
    {
      id: 2,
      src: require('../../../assets/MemoryTestResources/clock.jpg'),
      title: 'clock',
    },
    {
      id: 3,
      src: require('../../../assets/MemoryTestResources/cup.jpg'),
      title: 'cup',
    },
    {
      id: 4,
      src: require('../../../assets/MemoryTestResources/flower.jpg'),
      title: 'flower',
    },
    {
      id: 5,
      src: require('../../../assets/MemoryTestResources/fork.jpg'),
      title: 'fork',
    },
    {
      id: 6,
      src: require('../../../assets/MemoryTestResources/keys.jpg'),
      title: 'keys',
    },
    {
      id: 7,
      src: require('../../../assets/MemoryTestResources/pen.jpg'),
      title: 'pen',
    },
    {
      id: 8,
      src: require('../../../assets/MemoryTestResources/scissors.jpg'),
      title: 'scissors',
    },
    {
      id: 9,
      src: require('../../../assets/MemoryTestResources/toothbrush.jpg'),
      title: 'toothbrush',
    },
  ];
  const arr = [];

  function generate3Numbers(arr) {
    while (arr.length < 8) {
      const r = Math.floor(Math.random() * 9) + 1;
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    return arr;
  }
  generate3Numbers(arr);
  return (
    <View style={uiStyle.container}>
      <Text style={uiStyle.text}>{images[arr[0]].title}</Text>
      <Image
        style={{ width: 300, height: 300, resizeMode: 'contain' }}
        source={images[arr[0]].src}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={uiStyle.nextButton}
      >
        <Text style={uiStyle.buttonText}>Next Image</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});

export default MTTwo;
