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
  const [state, setState] = useState({ timer: null, milliseconds: 0 });
  const start = () => {
    let timer = setInterval(() => {
      setState(state.milliseconds + 1);
    }, 0);
    setState({ timer: (state.timer = timer) });
    //console.log(state.timer);
  };
  const stop = () => {
    clearInterval(state.timer);
  };

  const StartTest = () => {
    return (
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => {
          console.log('1');
          setStage(stage + 1);
          setTimeout(
            function () {
              console.log('2');
              setStage(stage + 2);
              //setTimerOn(true);
              //start();
              console.log('3');
            }.bind(this),
            3000,
          ); // wait 3 seconds, then set to next stage
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
      <TouchableOpacity
        style={styles.pressButton}
        onPress={() => {
          //setTimerOn(false);
          //stop();
          setAttempt(attempt + 1);
          if (attempt > 1) {
            navigation.navigate('Home');
          }
          setStage(0);
          console.log(stage);
        }}
      >
        <Text style={styles.pressText}>Press!</Text>
      </TouchableOpacity>
    );
  };

  const [attempt, setAttempt] = useState(0);
  const [description, setDescription] = useState();

  const [timerOn, setTimerOn] = useState(false);

  const [stage, setStage] = useState(0);

  useEffect(() => {
    setDescription(descriptions[0]);
  }, [attempt]);

  let form;
  if (stage === 0) {
    form = <StartTest />;
  } else if (stage === 1) {
    form = <WaitButton />;
  } else if (stage === 2) {
    form = <PressButton />;
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
