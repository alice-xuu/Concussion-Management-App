import * as React from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';

import uiStyle from '../../components/uiStyle.jsx';

/**
 * The screen will be perform memory test.
 * This is the first test out of the Further Tests
 * After this test is completed, user needs to navigate to the next test which
 * is Reaction Test.
 *
 * @param {number[]} route.params.attemptResults time for each attempt
 * @param {number} route.params.avg average time
 * @param {string} route.params.grade pass or fail
 */
export default function RTThree({ route, navigation }) {
  const reactionTest = route.params;
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

  let resultComponent = <></>;

  resultComponent = (
    <Text style={uiStyle.text}>
      Results
      {'\n'}
      {'\n'}
      Attempt 1: {reactionTest.attemptResults[0]}
      {'\n'}
      Attempt 2: {reactionTest.attemptResults[1]}
      {'\n'}
      Attempt 3: {reactionTest.attemptResults[2]}
      {'\n'}
      Your average reaction time is {reactionTest.avg.toFixed(2)}
      {'\n'}
      {'\n'}
      Your overall grade is {reactionTest.grade}
    </Text>
  );

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
