import * as React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View, Vibration
} from "react-native";
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
        // setData(accelerometerData);
        Accelerometer.setUpdateInterval(500);
        x_arr.push(accelerometerData.x);
        y_arr.push(accelerometerData.y);
        z_arr.push(accelerometerData.z);
        console.log('x array: ', x_arr);
        console.log(getAverage(x_arr));
        console.log(getVariance(x_arr));
      }),
    );
  };

  const getAverage = (arr) => {
    const reducer = (total, currentValue) => total + currentValue;
    const sum = arr.reduce(reducer);
    const average = sum / arr.length;
    console.log('average: ', average);

    return average;
  };

  const getVariance = (arr) => {
    const reducer = (total, currentValue) =>
      total + Math.pow(currentValue - getAverage(arr), 2);
    const sum = arr.reduce(reducer);
    const variance = sum / (arr.length - 1);
    console.log('variance: ', variance);

    return variance;
  };
  const { x, y, z } = data;
  const x_arr = [];
  const y_arr = [];
  const z_arr = [];

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={uiStyle.text}>
        Hold to chest for 10 seconds after clicking "Start!" {'\n'}
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
            Vibration.vibrate();
          }, 1000);
        }}
        style={styles.startCheckButton}
      >
        <Text style={styles.startCheckText}>{text}</Text>
      </TouchableOpacity>
      <View style={uiStyle.textContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Balance Test 1')}
          style={uiStyle.bottomButton}
        >
          <Text style={uiStyle.buttonLabel}>Cancel</Text>
        </TouchableOpacity>
      </View>
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
