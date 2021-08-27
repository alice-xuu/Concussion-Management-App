import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { PatientRepo } from '../model/database/PatientRepo';
import { DatabaseAdapter } from '../model/database/DatabaseAdapter';
import { IncidentReportRepo } from '../model/database/IncidentReportRepo';

/**
 * Starting screen that handles navigation to main app flows.
 *
 * @param navigation used to move to the other screens
 */
function HomeScreen({ navigation }) {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  // TODO: move this to a context that is globally accessible
  const [patientRepo, setPatientRepo] = useState(null);
  const [, setDa] = useState(null);
  const [incidentRepo, setIncidientRepo] = useState(null);

  // TODO: remove or move to a context
  const [responses, setResponses] = useState(null);
  const [patientIdState, setPatientId] = useState(null);
  const [reportId, setReportId] = useState(null);

  // TODO: move to context
  useEffect(() => {
    DatabaseAdapter.initDatabase().then((da) => {
      setDa(da);
      setPatientRepo(new PatientRepo(da));
      setIncidientRepo(new IncidentReportRepo(da));
    });
  }, []);

  // TODO: remove
  const onCreatePatient = () => {
    if (patientRepo != null) {
      const fname = Math.random().toString();

      patientRepo.createPatient(fname, 'Smith').then(
        (patientId) => {
          patientRepo.getPatient(patientId).then((patient) => {
            setFirstName(patient.firstName);
            setLastName(patient.lastName);
          });
          setPatientId(patientId);
        },
        (err) => console.log('Error: ' + err),
      );
    } else {
      console.log('null patientRepo');
    }
  };

  // TODO: remove
  const handleCreateReport = () => {
    incidentRepo.createReport(patientIdState).then((id) => setReportId(id));
  };

  // TODO: remove
  const handleCreateSResponse = () => {
    const desc = 'test-response';
    const res = Math.random().toString();
    incidentRepo.addSingleResponse(reportId, desc, res).then(() => {
      incidentRepo
        .getSingleResponses(reportId)
        .then((sr) => setResponses(JSON.stringify(sr)));
    });
  };

  // TODO: remove
  const handleCreateMultiResponse = () => {
    const desc = 'test-multi-response';
    incidentRepo
      .addMultiResponse(reportId, desc, [
        Math.random().toString(),
        Math.random().toString(),
        Math.random().toString(),
      ])
      .then(
        () => {
          incidentRepo
            .getMultiResponses(reportId)
            .then((mrs) => setResponses(JSON.stringify(mrs)));
        },
        (err) => console.log(err),
      );
  };

  return (
    <View style={styles.container}>
      <Text>Concussion Check</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Record Incident')}
      >
        <Text style={styles.label}>Start Check</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'red',
    marginHorizontal: 50,
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    marginHorizontal: 50,
    marginVertical: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
