import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import { useContext, useEffect, useState } from 'react';
import uiStyle from '../../components/uiStyle';
import {
  IncidentReportRepoContext,
  ReportIdContext,
} from '../../components/GlobalContextProvider';

const descriptions = [
  'Tap the circle when the circle turns black. Press start when you are ready.',
  'Tap the circle when the circle turns black.',
  '',
];

function RTTwo({ navigation }) {
  const [attemptResults, setAttemptResults] = useState([]);
  const [reportId] = useContext(ReportIdContext);
  const incidentRepoContext = useContext(IncidentReportRepoContext);

  // Start time in milliseconds
  const [startMs, setStartMs] = useState(null);

  // stage = button stage from start -> wait -> press
  const [stage, setStage] = useState(0);

  let btnStyle;
  let btnOnPress = () => {};
  let btnTxt;
  let btnTxtStyle;

  if (stage === 0) {
    btnStyle = styles.startButton;
    btnOnPress = () => {
      setStage(1);
      setTimeout(() => {
        setStartMs(Date.now());
        setStage(2);
      }, 3000); // wait 3 seconds, then set to next stage
    };
    btnTxt = 'Start!';
    btnTxtStyle = styles.startText;
  } else if (stage === 1) {
    btnStyle = styles.waitButton;
    btnTxt = 'Wait...';
    btnTxtStyle = styles.waitText;
  } else if (stage === 2) {
    btnStyle = styles.pressButton;
    btnOnPress = () => {
      setAttemptResults((prevAttemptResults) => [
        ...prevAttemptResults,
        Date.now() - startMs,
      ]);

      setStartMs(null);
      setStage(0);
    };
    btnTxt = 'Press!';
    btnTxtStyle = styles.pressText;
  }

  useEffect(() => {
    if (attemptResults.length === 3) {
      const avg =
        attemptResults.reduce((a, b) => a + b) / attemptResults.length;
      let grade = 'fail';
      if (avg < 500) {
        grade = 'pass';
      }

      incidentRepoContext
        .addReactionTest(reportId, attemptResults, avg, grade)
        .catch(console.log);
    }
  }, [reportId, attemptResults, incidentRepoContext]);

  useEffect(() => {
    if (attemptResults.length === 3) {
      const avg =
        attemptResults.reduce((a, b) => a + b) / attemptResults.length;
      let grade = 'fail';
      if (avg < 500) {
        grade = 'pass';
      }
      incidentRepoContext
        .addReactionTest(reportId, attemptResults, avg, grade)
        .catch(console.log);

      navigation.navigate('Reaction Test 3');
    } else if (attemptResults.length > 3) {
      navigation.pop();
    }
  }, [reportId, attemptResults, incidentRepoContext, navigation]);

  return (
    <View style={uiStyle.textContainer}>
      <Text style={[uiStyle.textNoAbsolute]}>
        Attempt {attemptResults.length + 1}/3
        {'\n'}
        {'\n'}
        {descriptions[stage]}
      </Text>

      <View style={uiStyle.textContainer}>
        <TouchableOpacity
          style={[styles.reactionButton, btnStyle]}
          onPress={btnOnPress}
        >
          <Text style={btnTxtStyle}>{btnTxt}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  reactionButton: {
    width: 300,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150,
  },
  startButton: {
    backgroundColor: '#ff0000',
  },
  startText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
  waitButton: {
    borderWidth: 5,
    backgroundColor: '#FFFFFF',
  },
  waitText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  pressButton: {
    backgroundColor: '#000000',
  },
  pressText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
  screenContainer: {
    padding: 10,
  },
  btnView: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default RTTwo;
