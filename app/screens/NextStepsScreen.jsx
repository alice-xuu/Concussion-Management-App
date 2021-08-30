import * as React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';

import uiStyle from '../components/uiStyle';

function NextStepsScreen({ navigation }) {
  return (
    <SafeAreaView style={uiStyle.container}>

      <TouchableOpacity style={uiStyle.nextButton}
        onPress={() => navigation.navigate('SingleChoiceQ (IR2)')}
        
      >
        <Text style={uiStyle.buttonText}>Start</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}


export default NextStepsScreen;
