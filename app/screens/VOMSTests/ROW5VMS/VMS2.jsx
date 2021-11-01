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

function VMS2(props) {
  const [sound, setSound] = React.useState();
  const [playing, setPlaying] = React.useState(false);
  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('../../../../assets/beep.mp3'),
    );
    setSound(sound);
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  function playRepetitions() {
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        playSound().then();
      }, 1200 * i);
    }
  }

  if (!playing) {
    setPlaying(true);
    playRepetitions();
  }

  return (
    <SafeAreaView style={uiStyle.container}>
      <View style={styles.circleContainer}>
        <View style={uiStyle.vomsCircle} />
      </View>
      <TouchableOpacity
        onPress={() => {
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
