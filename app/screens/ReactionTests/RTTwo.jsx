import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
  Button,
} from 'react-native';

import { useEffect, useReducer, useState } from 'react';
import uiStyle from '../../components/uiStyle';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';

const descriptions = [
  'Tap the screen when the circle turns black. Press start when you are ready.',
  'Tap the screen when the circle turns black.',
  '',
];

function RTTwo({ navigation }) {
  const [attempt, setAttempt] = useState(0);
  const [attemptResults, setAttemptResults] = useState([]);

  // Start time in milliseconds
  const [startMs, setStartMs] = useState(null);

  // stage = button stage from start -> wait -> press
  const [stage, setStage] = useState(0);

  let btnStyle;
  let btnOnPress = () => {};
  let btnTxt;
  let btnTxtStyle;

  if (stage === 0) {
    btnStyle = styles.startButton;
    btnOnPress = () => {
      setStage(1);
      setTimeout(() => {
        setStartMs(Date.now());
        setStage(2);
      }, 3000); // wait 3 seconds, then set to next stage
    };
    btnTxt = 'Start!';
    btnTxtStyle = styles.startText;
  } else if (stage === 1) {
    btnStyle = styles.waitButton;
    btnTxt = 'Wait...';
    btnTxtStyle = styles.waitText;
  } else if (stage === 2) {
    btnStyle = styles.pressButton;
    btnOnPress = () => {
      setAttemptResults([...attemptResults, Date.now() - startMs]);
      setAttempt(attempt + 1);

      setStartMs(null);

      console.log(attemptResults);

      if (attempt >= 2) {
        navigation.navigate('Reaction Test 3');
      }
      setStage(0);
    };
    btnTxt = 'Press!';
    btnTxtStyle = styles.pressText;
  }

  return (
    <SafeAreaView style={uiStyle.container}>
      <Text style={uiStyle.text}>
        Reaction Test{'\n'}
        {'\n'}
        Attempt {attempt + 1}/3
        {'\n'}
        {'\n'}
        {descriptions[stage]}
      </Text>

      <TouchableOpacity
        style={[styles.reactionButton, btnStyle]}
        onPress={btnOnPress}
      >
        <Text style={btnTxtStyle}>{btnTxt}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  reactionButton: {
    width: 300,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150,
  },
  startButton: {
    backgroundColor: '#ff0000',
  },
  startText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
  waitButton: {
    borderWidth: 5,
    backgroundColor: '#FFFFFF',
  },
  waitText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  pressButton: {
    backgroundColor: '#000000',
  },
  pressText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default RTTwo;
