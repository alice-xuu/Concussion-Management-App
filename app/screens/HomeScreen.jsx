import * as React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Button,
  View,
} from 'react-native';

import uiStyle from '../components/uiStyle';
import { useContext } from 'react';
import {
  IncidentReportRepoContext,
  PatientRepoContext,
  ReportIdContext,
} from '../components/GlobalContextProvider';

/**
 * Starting screen that handles navigation to main app flows.
 *
 * @param navigation used to move to the other screens
 */
function HomeScreen({ navigation }) {
  const [reportId, setReportId] = useContext(ReportIdContext);
  const incidentRepoContext = useContext(IncidentReportRepoContext);
  const handleCreateReport = () => {
    incidentRepoContext.createReport(null).then((id) => setReportId(id));
  };
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.titleText}>Concussion Check</Text>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            handleCreateReport();
            navigation.navigate('Start Check');
          }}
          style={styles.startCheckButton}
        >
          <Text style={styles.startCheckText}>Start Check</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleCreateReport();
            navigation.navigate('Balance Test 1');
          }}
          style={styles.startCheckButton}
        >
          <Text style={styles.startCheckText}>testing</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Documents')}
          style={uiStyle.bottomButton}
        >
          <Text style={uiStyle.buttonLabel}>View History</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// https://reactnative.dev/docs/colors
const title = '#000000';
const text = '#fff';
const background = '#fff';
const buttons = '#ff0000';
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: background,
  },
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
  },
  startCheckButton: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: buttons,
    margin: 10,
  },
  startCheckText: {
    color: text,
    fontWeight: 'bold',
    fontSize: 20,
  },
  titleText: {
    color: title,
    fontSize: 30,
    marginTop: 60,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
