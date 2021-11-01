import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import uiStyle from '../../../components/uiStyle';
import { Audio } from 'expo-av';
import { useEffect } from 'react';

function VMS2(props) {
  const [sound, setSound] = React.useState();
  const [playing, setPlaying] = React.useState(false);
  const [repetition, setRepetition] = React.useState(20);
  const [intervalId, setIntervalId] = React.useState(null);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('../../../../assets/beep.mp3'),
    );
    setSound(sound);
    await sound.playAsync();
    setRepetition(repetition - 1);
  }

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  /*  function playRepetitions() {
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        playSound().then();
      }, 1200 * i);
    }
  }

  if (!playing) {
    setTimeout(() => {
      setPlaying(true);
      playRepetitions();
    }, 1200);
  }*/

  useEffect(() => {
    if (repetition < 0) {
      return;
    }

    const id = setInterval(function () {
      playSound().then();
      console.log(repetition);
    }, 1200);
    setIntervalId(id);
    return () => clearInterval(id);
  }, [repetition]);

  /*setPlaying(true);
    var intevID = setInterval(function () {
      if (repetition === 20) {
      } else {
        playSound().then();
        setRepetition((repetition) => repetition + 1);
      }
      console.log(repetition);
    }, 1200);
    setIntervalId(intevID);
  }*/

  return (
    <SafeAreaView style={uiStyle.container}>
      <View style={styles.circleContainer}>
        <View style={uiStyle.vomsCircle} />
      </View>
      <TouchableOpacity
        onPress={() => {
          window.clearInterval(intervalId);
          props.navigation.navigate('VOMS VMS 3 Response 8');
        }}
        style={uiStyle.bottomButton}
      >
        <Text style={uiStyle.buttonLabel}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  circleContainer: {
    ...uiStyle.contentContainer,
    justifyContent: 'center',
  },
});

export default VMS2;
