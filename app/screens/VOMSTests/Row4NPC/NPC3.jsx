import * as React from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import uiStyle from '../../../components/uiStyle';
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

  const [value, onChangeText] = React.useState('');

  return (
    <SafeAreaView style={uiStyle.container}>
      <View style={uiStyle.contentContainerCentered}>
        <Text style={uiStyle.text}> Please input the distance.</Text>
        <SafeAreaView style={uiStyle.textContainer}>
          <TextInput
            style={styles.content}
            onChangeText={(text) => onChangeText(text)}
            textDecorationLine={'none'}
            value={value}
            multiline={true}
            numberOfLines={4}
            textAlignVertical="top"
          />
        </SafeAreaView>
      </View>
      <TouchableOpacity
        onPress={() => {
          {
            incidentRepoContext
              .addVOMSNPCDistance(reportId, value)
              .catch(console.log);
            navigation.navigate('VOMS NPC 4 Response 7');
          }
        }}
        style={uiStyle.bottomButton}
      >
        <Text style={uiStyle.buttonLabel}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    maxHeight: 200,
    marginVertical: 0,
    borderWidth: 3,
    borderColor: 'black',
    marginBottom: 50,
    paddingLeft: 10,
    padding: 0,
    width: width - 40,
    height: height - 700,
  },
});

export default NPC3;
