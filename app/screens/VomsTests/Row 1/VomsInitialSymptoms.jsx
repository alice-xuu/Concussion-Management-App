import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import uiStyle from '../../../components/uiStyle';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

function VomsInitialSymptoms({ navigation }) {
  const [sliderOneChanging, setSliderOneChanging] = React.useState(false);
  const [sliderOneValue, setSliderOneValue] = React.useState([0]);
  const sliderOneValuesChangeStart = () => setSliderOneChanging(true);
  const sliderOneValuesChange = (values) => setSliderOneValue(values);
  const sliderOneValuesChangeFinish = () => setSliderOneChanging(false);

  const [sliderTwoChanging, setSliderTwoChanging] = React.useState(false);
  const [sliderTwoValue, setSliderTwoValue] = React.useState([0]);
  const sliderTwoValuesChangeStart = () => setSliderTwoChanging(true);
  const sliderTwoValuesChange = (values) => setSliderTwoValue(values);
  const sliderTwoValuesChangeFinish = () => setSliderTwoChanging(false);

  const [sliderThreeChanging, setSliderThreeChanging] = React.useState(false);
  const [sliderThreeValue, setSliderThreeValue] = React.useState([0]);
  const sliderThreeValuesChangeStart = () => setSliderThreeChanging(true);
  const sliderThreeValuesChange = (values) => setSliderThreeValue(values);
  const sliderThreeValuesChangeFinish = () => setSliderThreeChanging(false);

  const [sliderFourChanging, setSliderFourChanging] = React.useState(false);
  const [sliderFourValue, setSliderFourValue] = React.useState([0]);
  const sliderFourValuesChangeStart = () => setSliderFourChanging(true);
  const sliderFourValuesChange = (values) => setSliderFourValue(values);
  const sliderFourValuesChangeFinish = () => setSliderFourChanging(false);

  return (
    <SafeAreaView style={uiStyle.container}>
      <Text style={uiStyle.titleText}>
        Does the affected person have any of these symptoms?
      </Text>
      <View style={[uiStyle.contentContainer]}>
        <View style={styles.sliders}>
          <View style={styles.sliderOne}>
            <Text style={uiStyle.text}>Headache:</Text>
            <Text style={[uiStyle.text, sliderOneChanging && { color: 'red' }]}>
              {sliderOneValue}
            </Text>
          </View>
          <MultiSlider
            values={sliderOneValue}
            sliderLength={310}
            onValuesChangeStart={sliderOneValuesChangeStart}
            onValuesChange={sliderOneValuesChange}
            onValuesChangeFinish={sliderOneValuesChangeFinish}
          />
          <View style={styles.sliderOne}>
            <Text style={uiStyle.text}>Nausea: </Text>
            <Text style={[uiStyle.text, sliderTwoChanging && { color: 'red' }]}>
              {sliderTwoValue}
            </Text>
          </View>
          <MultiSlider
            values={sliderTwoValue}
            sliderLength={310}
            onValuesChangeStart={sliderTwoValuesChangeStart}
            onValuesChange={sliderTwoValuesChange}
            onValuesChangeFinish={sliderTwoValuesChangeFinish}
          />
          <View style={styles.sliderOne}>
            <Text style={uiStyle.text}>Dizziness:</Text>
            <Text
              style={[uiStyle.text, sliderThreeChanging && { color: 'red' }]}
            >
              {sliderThreeValue}
            </Text>
          </View>
          <MultiSlider
            values={sliderThreeValue}
            sliderLength={310}
            onValuesChangeStart={sliderThreeValuesChangeStart}
            onValuesChange={sliderThreeValuesChange}
            onValuesChangeFinish={sliderThreeValuesChangeFinish}
          />
          <View style={styles.sliderOne}>
            <Text style={uiStyle.text}>Fogginess:</Text>
            <Text
              style={[uiStyle.text, sliderFourChanging && { color: 'red' }]}
            >
              {sliderFourValue}
            </Text>
          </View>
          <MultiSlider
            values={sliderFourValue}
            sliderLength={310}
            onValuesChangeStart={sliderFourValuesChangeStart}
            onValuesChange={sliderFourValuesChange}
            onValuesChangeFinish={sliderFourValuesChangeFinish}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Voms Test SP 1')}
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
