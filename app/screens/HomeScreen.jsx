import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { PatientRepository } from '../model/database/PatientRepository';
import { DatabaseAdapter } from '../model/database/DatabaseAdapter';

/**
 * Starting screen that handles navigation to main app flows.
 *
 * @param navigation used to move to the other screens
 */
function HomeScreen({ navigation }) {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [patientRepo, setPatientRepo] = useState(null);
  const [daState, setDa] = useState(null);

  useEffect(() => {
    DatabaseAdapter.initDatabase().then((da) => {
      setDa(da);
      setPatientRepo(new PatientRepository(da));
    });
  }, []);

  const onCreatePatient = () => {
    if (patientRepo != null) {
      const fname = Math.random().toString();

      patientRepo.createPatient(fname, 'Smith').then(
        (patientId) => {
          patientRepo.getPatient(patientId).then((patient) => {
            setFirstName(patient.firstName);
            setLastName(patient.lastName);
          });
        },
        (err) => console.log('Error: ' + err),
      );
    } else {
      console.log('null patientRepo');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="View Documents"
        onPress={() => navigation.navigate('Documents')}
      />
      <Button
        title="Incident Report"
        onPress={() => navigation.navigate('RecordIncident')}
      />

      <Button title="Create Patient" onPress={() => onCreatePatient()} />

      <Text>{firstName + ' ' + lastName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
