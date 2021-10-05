import * as React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Vibration,
} from 'react-native';
import { Accelerometer } from 'expo-sensors';

import uiStyle from '../../components/uiStyle.jsx';
import { useContext, useState } from 'react';
import {
  dataContext,
  IncidentReportRepoContext,
  PatientContext,
  PatientRepoContext,
  ReportIdContext,
} from '../../components/GlobalContextProvider';

function BTTwo({ navigation }) {
  // Context variables
  const [patient, setPatient] = useContext(PatientContext);
  const [reportId, setReportId] = useContext(ReportIdContext);
  const patientRepoContext = useContext(PatientRepoContext);
  const incidentRepoContext = useContext(IncidentReportRepoContext);

  // Local state
  const [responses, setResponses] = useState(null);

  const handleCreateMultiResponse = (answers) => {
    const desc = 'BalanceTest-response: first SD, second VAR';
    incidentRepoContext
      .addMultiResponse(reportId, desc, answers)
      .then(() => {})
      .then(
        () => {
          incidentRepoContext
            .getMultiResponses(reportId)
            .then((mrs) => setResponses(JSON.stringify(mrs)));
        },
        (err) => console.log(err),
      );
    console.log('reportId' + reportId + 'response: ' + responses);
  };

  const [text, setText] = useState('Start!');
  const changeText = () => setText('Recording!');
  const [data, setData] = useContext(dataContext);
  const [subscription, setSubscription] = useState(null);
  const x_arr = [];
  const y_arr = [];
  const z_arr = [];

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
        const x_sd = getStandardDeviation(x_arr);
        const y_sd = getStandardDeviation(y_arr);
        const z_sd = getStandardDeviation(z_arr);
        const sd = (x_sd + y_sd + z_sd) / 3;
        setData(sd);
      }),
    );
  };

  function getStandardDeviation(array) {
    const n = array.length;
    const mean = array.reduce((a, b) => a + b) / n;
    if (!array || array.length === 0) {
      return 0;
    }
    return Math.sqrt(
      array.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n,
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={uiStyle.text}>
        Hold to chest for 10 seconds after clicking "Start!" {'\n'}
        {'\n'}
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
            //saving result to database
            handleCreateMultiResponse([
              Math.round(data * 1000) / 1000,
              Math.round(Math.pow(data, 2) * 1000) / 1000,
            ]);
          }, 10000);
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
