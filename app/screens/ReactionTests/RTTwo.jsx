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

import { useEffect, useState } from 'react';
import uiStyle from '../../components/uiStyle';

const descriptions = [
  'Tap the screen when the circle turns black. Press start when you are ready.',
  'Tap the screen when the circle turns black.',
  '',
];

const buttonInsts = ['Start!', 'Wait', 'Press!'];

function RTTwo({ navigation }) {
  const StartTest = () => {
    return (
      <TouchableOpacity style={styles.startButton} onPress={() => {}}>
        <Text style={styles.startText}>Start!</Text>
      </TouchableOpacity>
    );
  };
  const WaitButton = (props) => {
    return (
      <TouchableOpacity style={styles.waitButton}>
        <Text style={styles.waitText}> Wait...</Text>
      </TouchableOpacity>
    );
  };
  const PressButton = (props) => {
    return (
      <TouchableOpacity style={styles.pressButton}>
        <Text style={styles.pressText}>Press!</Text>
      </TouchableOpacity>
    );
  };

  const [attempt, setAttempt] = useState(0);
  const [description, setDescription] = useState();
  const [buttonInst, setButtonInst] = useState();

  const btnList = [StartTest, WaitButton, PressButton];
  const [state, setState] = useState({ index: 0, btns: btnList });
  const { index, btns } = state;

  useEffect(() => {
    setDescription(descriptions[attempt]);
    setButtonInst(buttonInsts[attempt]);
  }, [attempt]);

  return (
    <SafeAreaView style={uiStyle.container}>
      <Text style={uiStyle.text}>
        Reaction Test{'\n'}
        {'\n'}
        Attempt {attempt + 1}/3
        {'\n'}
        {'\n'}
        {description}
      </Text>

      <View>
        < />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  reactionBtn: {
    width: '75%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  startButton: {
    width: '75%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#ff0000',
  },

  startText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
  waitButton: {
    width: '75%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 5,
    backgroundColor: '#FFFFFF',
  },

  waitText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 20,
  },

  pressButton: {
    width: '75%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#000000',
  },

  pressText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default RTTwo;
