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

function RTTwo({ navigation }) {
  const StartTest = () => {
    return (
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => {
          setStage(stage + 1);
        }}
      >
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

  const btnList = [StartTest, WaitButton, PressButton];
  const [testing, setIsTesting] = useState(false);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    setDescription(descriptions[attempt]);
  }, [attempt]);

  let form;
  if (stage === 0) {
    form = <StartTest />;
  } else if (stage === 1) {
    form = <WaitButton />;
  }

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

      <View>{form}</View>
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
