import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Button,
} from 'react-native';

import uiStyle from '../../components/uiStyle.jsx';
import { useContext, useEffect, useState } from 'react';
import {
  IncidentReportRepoContext,
  ReportIdContext,
} from '../../components/GlobalContextProvider';

/**
 * The screen will be perform memory test.
 * This is the first test out of the Further Tests
 * After this test is completed, user needs to navigate to the next test which
 * is Reaction Test.
 */

export default function RTThree({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          onPress={() => navigation.navigate('Reaction Test 1')}
          title="REDO Test"
        />
      ),
    });
  }, [navigation]);
  const [reportId] = useContext(ReportIdContext);
  const incidentRepoContext = useContext(IncidentReportRepoContext);
  const [reactionTest, setReactionTest] = useState(null);

  useEffect(() => {
    incidentRepoContext.getReactionTest(reportId).then((rs) => {
      setReactionTest(rs);
    });
  }, [reportId, incidentRepoContext]);

  let resultComponent = <></>;

  if (reactionTest !== null) {
    resultComponent = (
      <View style={uiStyle.container}>
        <Text style={uiStyle.titleText}>Results</Text>
        <Text style={uiStyle.stackedText}>
          Attempt 1: {reactionTest.time_attempt_1} ms
          {'\n'}
          Attempt 2: {reactionTest.time_attempt_2} ms
          {'\n'}
          Attempt 3: {reactionTest.time_attempt_3} ms
          {'\n'}
          {'\n'}
          The average reaction time is: {reactionTest.time_average.toFixed(
            2,
          )}{' '}
          ms
          {'\n'}
          {'\n'}
          The overall grade is {reactionTest.grade}
        </Text>
      </View>
    );
  }
  return (
    <View style={uiStyle.container}>
      <View style={uiStyle.container}>{resultComponent}</View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Balance Test 1')}
        style={uiStyle.bottomButton}
      >
        <Text style={uiStyle.buttonLabel}>Start!</Text>
      </TouchableOpacity>
    </View>
  );
}
