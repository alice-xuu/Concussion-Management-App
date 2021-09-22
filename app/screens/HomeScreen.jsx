import * as React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Button,
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
        onPress={() => navigation.navigate('Documents')}
        style={uiStyle.bottomButton}
      >
        <Text style={uiStyle.buttonLabel}>View History</Text>
      </TouchableOpacity>
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
  startCheckButton: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: buttons,
    margin: 100,
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
