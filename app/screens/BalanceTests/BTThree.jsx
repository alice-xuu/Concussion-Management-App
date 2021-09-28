import * as React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';

import uiStyle from '../../components/uiStyle.jsx';
import { useContext } from 'react';
import { dataContext } from '../../components/GlobalContextProvider';

function BTThree({ navigation }) {
  const [data, setData] = useContext(dataContext);
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <Text style={uiStyle.text}>
          Stability Grade {'\n'}
          {'\n'}
          Variation{'\n'}
          {'\n'}
          X: Y: Z: Average: {Math.round(Math.pow(data, 2) * 1000) / 1000} {'\n'}
          {'\n'}
          Deviation{'\n'}
          {'\n'}
          X: Y: Z: Average: {Math.round(data * 1000) / 1000} {'\n'}
          {'\n'}
          Please pass the phone to your supervisor {'\n'}
        </Text>
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('Memory Test 5')}
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
