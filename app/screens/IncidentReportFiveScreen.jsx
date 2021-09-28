import * as React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
} from 'react-native';
import uiStyle from '../components/uiStyle';

import { useContext, useState } from 'react';
import {
  IncidentReportRepoContext,
  PatientContext,
  PatientRepoContext,
  ReportIdContext,
} from '../components/GlobalContextProvider';

/*
 * Asks user if there is a mechanism of injury
 * Response; Yes, Maybe/Unsure, No.
 */
function IncidentReportFiveScreen({ navigation }) {
  // Context variables
  const [patient, setPatient] = useContext(PatientContext);
  const [reportId, setReportId] = useContext(ReportIdContext);
  const patientRepoContext = useContext(PatientRepoContext);
  const incidentRepoContext = useContext(IncidentReportRepoContext);

  // Local state
  const [responses, setResponses] = useState(null);

  const handleCreateSResponse = (res) => {
    const desc = 'IR5-response';
    incidentRepoContext.addSingleResponse(reportId, desc, res).then(() => {
      incidentRepoContext
        .getSingleResponses(reportId)
        .then((sr) => setResponses(JSON.stringify(sr)));
    });
  };

  return (
    <SafeAreaView style={uiStyle.container}>
      <Text style={uiStyle.text}>
        Is there a mechanism of injury (a clear way the affected person could
        have been injured)?
      </Text>
      <SafeAreaView style={uiStyle.textContainer}>
        <View style={styles.sameRow}>
          <Pressable
            style={styles.buttonYes}
            onPress={() => {
              handleCreateSResponse('YES');
              navigation.navigate('Incident Report Result');
            }}
          >
            <Text style={styles.label}>YES</Text>
          </Pressable>

          <Pressable
            style={styles.buttonNo}
            onPress={() => {
              handleCreateSResponse('NO');
              navigation.navigate('Incident Report Result');
            }}
          >
            <Text style={styles.label}>NO</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonYes: {
    width: 125,
    height: 125,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 125,
    backgroundColor: 'green',
    margin: 10,
  },
  buttonNo: {
    width: 125,
    height: 125,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 125,
    backgroundColor: 'red',
    margin: 10,
  },

  label: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },

  sameRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  text: {
    fontSize: 30,
    lineHeight: 30,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    color: 'black',
    padding: 20,
  },
});

export default IncidentReportFiveScreen;
