import * as React from 'react';
<<<<<<< HEAD
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Button,
} from 'react-native';
=======
import { Text, View, TouchableOpacity } from 'react-native';
>>>>>>> 8d3dc1c07b96369fd8b4a9db4d2dbd7c89a2e055

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
  return (
    <View style={uiStyle.container}>
  const [reportId] = useContext(ReportIdContext);
  const incidentRepoContext = useContext(IncidentReportRepoContext);
  const [reactionTest, setReactionTest] = useState(null);

  useEffect(() => {
    incidentRepoContext.getReactionTest(reportId).then(setReactionTest);
  }, [reportId, incidentRepoContext]);

  let resultComponent = <></>;

  if (reactionTest !== null) {
    resultComponent = (
>>>>>>> 8d3dc1c07b96369fd8b4a9db4d2dbd7c89a2e055
      <Text style={uiStyle.text}>
        Results
        {'\n'}
        {'\n'}
        Attempt 1: {reactionTest.time_attempt_1}
        {'\n'}
        Attempt 2: {reactionTest.time_attempt_2}
        {'\n'}
        Attempt 3: {reactionTest.time_attempt_3}
        {'\n'}
        Your average reaction time is {reactionTest.time_average.toFixed(2)}
        {'\n'}
        {'\n'}
        Your overall grade is {reactionTest.grade}
      </Text>
    );
  }
  return (
    <View style={uiStyle.container}>
      {resultComponent}
      <TouchableOpacity
        onPress={() => navigation.navigate('Balance Test 1')}
        style={uiStyle.bottomButton}
      >
        <Text style={uiStyle.buttonLabel}>Start!</Text>
      </TouchableOpacity>
    </View>
  );
}
