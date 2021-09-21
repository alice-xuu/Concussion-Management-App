import * as React from 'react';
import { Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { Accelerometer } from 'expo-sensors';

import uiStyle from '../../components/uiStyle.jsx';
import { useContext, useState } from 'react';
import { dataContext } from '../../components/GlobalContextProvider';

function BTTwo({ navigation }) {
  const [text, setText] = useState('Start!');
  const changeText = () => setText('Have Started');
  const [data, setData] = useContext(dataContext);
  // data = { x: 0, y: 0, z: 0 };
  const [subscription, setSubscription] = useState(null);

  // const _slow = () => {
  //   Accelerometer.setUpdateInterval(5000);
  // };

  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
        setData(accelerometerData);
        Accelerometer.setUpdateInterval(1000);
      }),
    );
  };

  const { x, y, z } = data;

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={uiStyle.text}>
        Hold to chest for 5 seconds after clicking "Start!" {'\n'}
        {'\n'}
      </Text>
      <Text style={styles.text}>
        x: {x} y: {y} z:{z}
      </Text>
      <TouchableOpacity
        onPress={() => {
          if (!subscription) {
            _subscribe();
          }
          changeText();
          setTimeout(() => {
            Accelerometer.removeAllListeners();
            navigation.navigate('Balance Test 3');
          }, 5000);
        }}
        style={styles.startCheckButton}
      >
        <Text style={styles.startCheckText}>{text}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={uiStyle.bottomButton}
      >
        <Text style={uiStyle.buttonLabel}>Cancel</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const title = '#000000';
const text = '#fff';
const background = '#fff';
const buttons = '#ff0000';
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: background,
    justifyContent: 'center',
  },
  startCheckButton: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: buttons,
  },
  startCheckText: {
    color: text,
    fontWeight: 'bold',
    fontSize: 20,
  },
  titleText: {
    color: title,
    fontSize: 30,
    position: 'absolute',
    top: 60,
    fontWeight: 'bold',
  },
});

export default BTTwo;
