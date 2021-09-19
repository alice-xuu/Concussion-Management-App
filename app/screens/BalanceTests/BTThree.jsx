import * as React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';

import uiStyle from '../../components/uiStyle.jsx';
import { useContext } from 'react';
import { dataContext } from '../../components/GlobalContextProvider';

function BTThree({ navigation }) {
  const [data, setData] = useContext(dataContext);
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={uiStyle.text}>
        Stability Grade {'\n'}
        {'\n'}
        There was an error during the test, ensure you hold the phone to your
        chest and remain as still as possible for the test duration {'\n'}
        {'\n'}
        Variation{'\n'}
        X: {Math.round(data.x * 100) / 100}{'\n'}Y:
        {Math.round(data.y * 100) / 100}{'\n'}Z: {Math.round(data.z * 100) / 100}{'\n'}
        Average: {'\n'}
        {'\n'}
        Deviation{'\n'}
        X: Y: Z: Average: {'\n'}
        {'\n'}
        Please pass the phone to your supervisor {'\n'}
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={uiStyle.bottomButton}
      >
        <Text style={uiStyle.buttonLabel}>Next</Text>
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

export default BTThree;
