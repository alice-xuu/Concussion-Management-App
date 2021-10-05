import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { useEffect, useContext, useState } from 'react';
import {
  IncidentReportRepoContext,
  ReportIdContext,
} from '../components/GlobalContextProvider';
import uiStyle from '../components/uiStyle.jsx';

const parseMultiResponses = (mrs) => {
  const memoryTestCorrectAnswers = [];
  const memoryTest1Responses = [];
  const memoryTest2Responses = [];
  const balanceTestResponses = [];

  const testResultsArray = [];
  if (mrs !== null) {
    // console.log(mrs);
    mrs.forEach((element) => {
      if (
        element.MultiResponsePart.desc === 'Memory Test Correct Answers' &&
        element.MultiResponsePart.response !== undefined
      ) {
        memoryTestCorrectAnswers.push(element.MultiResponsePart.response);
      } else if (
        element.MultiResponsePart.desc === 'Memory Test Part 1' &&
        element.MultiResponsePart.response !== undefined
      ) {
        memoryTest1Responses.push(element.MultiResponsePart.response);
      } else if (
        element.MultiResponsePart.desc === 'Memory Test Part 2' &&
        element.MultiResponsePart.response !== undefined
      ) {
        memoryTest2Responses.push(element.MultiResponsePart.response);
      } else if (
        element.MultiResponsePart.desc ===
          'BalanceTest-response: first SD, second VAR' &&
        element.MultiResponsePart.response !== undefined
      ) {
        balanceTestResponses.push(element.MultiResponsePart.response);
      }
    });
  }
  let memory1Correct = 0;
  let memory2Correct = 0;
  memoryTest1Responses.forEach((element) => {
    if (memoryTestCorrectAnswers.includes(element)) {
      memory1Correct++;
    }
  });
  memoryTest2Responses.forEach((element) => {
    if (memoryTestCorrectAnswers.includes(element)) {
      memory2Correct++;
    }
  });
  if (memory1Correct === 3) {
    testResultsArray.push('Initial Memory Test Result: Passed');
  } else {
    testResultsArray.push('Initial Memory Test Result: Failed');
  }
  if (memory2Correct === 3) {
    testResultsArray.push('Follow-up Memory Test Result: Passed');
  } else {
    testResultsArray.push('Follow-up Memory Test Result: Failed');
  }
  if (balanceTestResponses[0] < 3 && balanceTestResponses[1] < 2) {
    testResultsArray.push('Follow-up Memory Test Result: Passed');
  } else {
    testResultsArray.push('Follow-up Memory Test Result: Failed');
  }
  return testResultsArray;
};

const parseReactionTest = (rt) => {
  const reactionTestResponses = [];
  if (rt.time_attempt_1 < 2 && rt.time_attempt_2 < 2 && rt.time_attempt_3 < 2) {
    reactionTestResponses.push('Reaction Test Result: Passed');
  } else {
    reactionTestResponses.push('Reaction Test Result:: Failed');
  }
  return reactionTestResponses;
};
let testResults = [];

/**
 * The screen will be perform memory test.
 * This is the first test out of the Further Tests
 * After this test is completed, user needs to navigate to the next test which
 * is Reaction Test.
 */
function FurtherTestsResultsScreen({ navigation }) {
  const incidentRepoContext = useContext(IncidentReportRepoContext);
  const [reportId] = useContext(ReportIdContext);
  const [results, setResults] = useState([]);
  const [reactionTest, setReactionTest] = useState(null);

  useEffect(() => {
    incidentRepoContext
      .getMultiResponses(reportId)
      .then((mrs) => parseMultiResponses(JSON.stringify(mrs)))
      .then((res) => setResults(res));
    for (let i = 0; i < results.length; i++) {
      testResults.push(<Text style={uiStyle.text}>{results[i]}</Text>);
    }
    incidentRepoContext
      .getReactionTest(reportId)
      .then((rt) => parseReactionTest(JSON.stringify(rt)))
      .then((rs) => setReactionTest(rs));
    testResults.push(<Text style={uiStyle.text}>{reactionTest}</Text>);
  }, [incidentRepoContext, reactionTest, reportId, results]);
  return (
    <View style={uiStyle.container}>
      <Text style={uiStyle.titleText}>Further Tests Results</Text>
      <ScrollView>{testResults}</ScrollView>
      <TouchableOpacity
        style={styles.bottomButton}
        onPress={() => navigation.navigate('Create Profile')}
      >
        <Text style={uiStyle.buttonLabel}>Save to new profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomButton}
        onPress={() => navigation.navigate('Select Profile')}
      >
        <Text style={uiStyle.buttonLabel}>Save to existing profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomButton: {
    marginLeft: 10,
    width: 300,
    height: 50,
    padding: 10,
    marginVertical: 10,
    borderRadius: 100,
    backgroundColor: '#FB582F',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FurtherTestsResultsScreen;
