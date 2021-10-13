import * as React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import uiStyle from '../../../components/uiStyle';
import { useState } from 'react';
import DisplayOptions from '../../../components/MemoryTests/DisplayOptions';

function VomsResponse1({ navigation }) {
  const [selected, setSelected] = useState(getOptionsObj());

  return (
    <SafeAreaView style={uiStyle.container}>
      <Text style={uiStyle.titleText}>
        Does the affected person have any of these symptoms?
      </Text>
      <View style={[uiStyle.contentContainer]}>
        <Text>
          {'\n'} {'\n'}
          {'\n'} {'\n'}
        </Text>
        <DisplayOptions
          options={options}
          updateOption={(opt) => {
            setSelected((prev) => {
              const newSelected = { ...prev };
              newSelected[opt] = !prev[opt];
              return newSelected;
            });
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={uiStyle.bottomButton}
      >
        <Text style={uiStyle.buttonLabel}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const options = ['headache', 'nausea', 'dizziness', 'fogginess'];

const getOptionsObj = () => {
  const obj = {};
  options.forEach((opt) => (obj[opt] = false));

  return obj;
};

export default VomsResponse1;
