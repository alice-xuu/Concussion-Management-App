import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { PatientRepository } from '../model/database/PatientRepository';
import * as SQLite from 'expo-sqlite';

const DB_FILE = 'measurements.db';
// const db = SQLite.openDatabase(DB_FILE);

/**
 * Starting screen that handles navigation to main app flows.
 *
 * @param navigation used to move to the other screens
 */
function HomeScreen({ navigation }) {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [patientRepo, setPatientRepo] = useState(null);
  const [db, setDb] = useState(SQLite.openDatabase(DB_FILE));

  React.useEffect(() => {
    console.log('in use effect');
    db.transaction((tx) => {
      tx.executeSql(
        `
        CREATE TABLE IF NOT EXISTS Patient (
            patient_id INTEGER PRIMARY KEY,
            first_name VARCHAR(200),
            last_name VARCHAR(200)
        );
        `,
        [],
        () => {
          console.log('settint patient repo');
          setPatientRepo(new PatientRepository(db));
        },
        (_, err) => console.log(err),
      );
    });
  }, [db]);

  const onCreatePatient = () => {
    console.log('creating patient');
    if (patientRepo != null) {
      const fname = Math.random().toString();
      console.log('making: ' + fname);
      patientRepo.createPatient(fname, 'Smith').then(
        (patientId) => {
          console.log('patientId: ' + patientId);
          patientRepo.getPatient(patientId).then((patient) => {
            setFirstName(patient.firstName);
            setLastName(patient.lastName);
          });
        },
        (err) => console.log(err),
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
