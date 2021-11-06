import * as React from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import uiStyle from '../../../components/uiStyle';
import Slider from '@react-native-community/slider';
import {
  IncidentReportRepoContext,
  ReportIdContext,
} from '../../../components/GlobalContextProvider';
import { useContext } from 'react';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function NPC3({ navigation }) {
  const [reportId] = useContext(ReportIdContext);
  const incidentRepoContext = useContext(IncidentReportRepoContext);

  const [sliderOneValue, setSliderOneValue] = React.useState(0);

  return (
    <SafeAreaView style={uiStyle.container}>
      <ScrollView>
        <Text style={uiStyle.titleText}>Please select the distance</Text>
        <View style={[uiStyle.contentContainer]}>
          <View style={styles.sliders}>
            <View style={styles.sliderOne}>
              <Text style={uiStyle.text}>Distance: {sliderOneValue}</Text>
            </View>
            <Slider
              minimumValue={1}
              maximumValue={30}
              step={1}
              onValueChange={(val) => setSliderOneValue(val)}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            incidentRepoContext
              .addVOMSNPCDistance(reportId, sliderOneValue)
              .catch(console.log);
            navigation.navigate('VOMS NPC 4 Response 7');
          }}
          style={uiStyle.bottomButton}
        >
          <Text style={uiStyle.buttonLabel}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
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

export default NPC3;
