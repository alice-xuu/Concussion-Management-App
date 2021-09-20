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
import { buttons } from '../../components/uiStyle';

const descriptions = [
  'Tap the screen when the circle turns black. Press start when you are ready.',
  'Tap the screen when the circle turns black.',
  '',
];

const buttonInsts = ['Start!', 'Wait', 'Press!'];

const buttonStyles = [{ backgroundColor: buttons }, {}];

export default function RTTwo({ navigation }) {
  const [attempt, setAttempt] = useState(0);
  const [description, setDescription] = useState();
  const [buttonInst, setButtonInst] = useState();

  useEffect(() => {
    setDescription(descriptions[attempt]);
    setButtonInst(buttonInsts[attempt]);
  }, [attempt]);

  return (
    <SafeAreaView>
      <Text>Reaction Test</Text>
      <Text>Attempt {attempt + 1}/3</Text>
      <Text>{description}</Text>
      <Button style={styles.reactionBtn} title={buttonInst} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  reactionBtn: {
    width: '75%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    type: 'outline',
  },
  startText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
  blackText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
