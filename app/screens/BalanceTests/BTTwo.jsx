import * as React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Gyroscope } from 'expo-sensors';

import uiStyle from '../../components/uiStyle.jsx';
import { useEffect, useState } from 'react';

function BTTwo({ navigation }) {
  const [text, setText] = useState('Start!');
  const changeText = () => setText('Have Started');
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

  const _slow = () => {
    Gyroscope.setUpdateInterval(4000);
  };
  const _subscribe = () => {
    setSubscription(
      Gyroscope.addListener((gyroscopeData) => {
        setData(gyroscopeData);
      }),
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  // useEffect(() => {
  //   _subscribe();
  //   return () => _unsubscribe();
  // }, []);

  const { x, y, z } = data;
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={uiStyle.text}>
        Hold to chest for 5 seconds after clicking "Start!" {'\n'}
        {'\n'}
      </Text>
      <Text style={styles.text}>
        x: {x} y: {y} z: {z}
      </Text>
      <TouchableOpacity
        onPress={() => {
          _subscribe();
          _slow();
          _unsubscribe();
          changeText();
          setTimeout(() => {
            navigation.navigate('Balance Test 3');
          }, 5000);
        }}
        style={styles.startCheckButton}
      >
        <Text style={styles.startCheckText}>{text}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Balance Test 1')}
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
