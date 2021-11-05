import * as React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import uiStyle from '../../components/uiStyle.jsx';

function ReportScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <Text style={uiStyle.text}>
          Report {'\n'}
          {'\n'}
        </Text>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}
        style={uiStyle.startCheckButton}
      >
        <Text style={uiStyle.startCheckText}>Home</Text>
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
    top: 50,
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

export default ReportScreen;
