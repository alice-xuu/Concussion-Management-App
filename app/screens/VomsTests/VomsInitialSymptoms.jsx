import * as React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import uiStyle from '../../components/uiStyle';
import Slider from '@react-native-community/slider';
import {
  IncidentReportRepoContext,
  ReportIdContext,
} from '../../components/GlobalContextProvider';
import { useContext } from 'react';

function VomsInitialSymptoms({ navigation }) {
  const [reportId] = useContext(ReportIdContext);
  const incidentRepoContext = useContext(IncidentReportRepoContext);

  const [sliderOneValue, setSliderOneValue] = React.useState(0);
  const [sliderTwoValue, setSliderTwoValue] = React.useState(0);
  const [sliderThreeValue, setSliderThreeValue] = React.useState(0);
  const [sliderFourValue, setSliderFourValue] = React.useState(0);

  return (
    <SafeAreaView style={uiStyle.container}>
      <Text style={uiStyle.titleText}>
        Does the affected person have any of these symptoms?
      </Text>
      <View style={[uiStyle.contentContainer]}>
        <View style={styles.sliders}>
          <View style={styles.sliderOne}>
            <Text style={uiStyle.text}>Headache:</Text>
            <Text style={[uiStyle.text]}>{sliderOneValue}</Text>
          </View>
          <Slider
            minimumValue={0}
            maximumValue={10}
            step={1}
            onValueChange={(val) => setSliderOneValue(val)}
          />
          <View style={styles.sliderOne}>
            <Text style={uiStyle.text}>Nausea: </Text>
            <Text style={[uiStyle.text]}>{sliderTwoValue}</Text>
          </View>
          <Slider
            minimumValue={0}
            maximumValue={10}
            step={1}
            onValueChange={(val) => setSliderTwoValue(val)}
          />
          <View style={styles.sliderOne}>
            <Text style={uiStyle.text}>Dizziness:</Text>
            <Text style={[uiStyle.text]}>{sliderThreeValue}</Text>
          </View>
          <Slider
            minimumValue={0}
            maximumValue={10}
            step={1}
            onValueChange={(val) => setSliderThreeValue(val)}
          />
          <View style={styles.sliderOne}>
            <Text style={uiStyle.text}>Fogginess:</Text>
            <Text style={[uiStyle.text]}>{sliderFourValue}</Text>
          </View>
          <Slider
            minimumValue={0}
            maximumValue={10}
            step={1}
            onValueChange={(val) => setSliderFourValue(val)}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          incidentRepoContext
            .addVOMSSymptoms(
              reportId,
              'Initial',
              sliderOneValue,
              sliderTwoValue,
              sliderThreeValue,
              sliderFourValue,
            )
            .catch(console.log);
          navigation.navigate('VOMS Smooth Pursuits 1');
        }}
        style={uiStyle.bottomButton}
      >
        <Text style={uiStyle.buttonLabel}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliders: {
    margin: 20,
    width: 280,
  },
  text: {
    alignSelf: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 30,
  },
  sliderOne: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default VomsInitialSymptoms;
