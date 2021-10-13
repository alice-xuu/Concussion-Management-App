import * as React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import uiStyle from '../../../components/uiStyle';
import { useState } from 'react';
import DisplayOptions from '../../../components/MemoryTests/DisplayOptions';

function VomsResponse4(props) {
  const [selected, setSelected] = useState(getOptionsObj());

  return (
    <SafeAreaView style={uiStyle.container}>
      <View style={[uiStyle.contentContainer]}>
        <Text style={uiStyle.text}>
          Does the affected person have any of these symptoms?
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
      <TouchableOpacity onPress={() => {}} style={uiStyle.bottomButton}>
        <Text style={uiStyle.buttonLabel}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const options = ['headache', 'nausea', 'dizzyness', 'foggyness'];

const getOptionsObj = () => {
  const obj = {};
  options.forEach((opt) => (obj[opt] = false));

  return obj;
};

export default VomsResponse4;
