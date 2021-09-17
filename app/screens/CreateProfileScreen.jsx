import * as React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  IncidentReportRepoContext,
  PatientContext,
  PatientRepoContext,
  ReportIdContext
} from "../components/GlobalContextProvider";
import { useContext, useState } from 'react';
import uiStyle from '../components/uiStyle';
/**
 * The screen will ask user to fill in details so their result can be saved in
 * their account.
 */
function CreateProfileScreen({ navigation }) {
  // Context variables
  const [patient, setPatient] = useContext(PatientContext);
  const [patients, setPatients] = useContext(PatientContext);
  const [reportId, setReportId] = useContext(ReportIdContext);
  const patientRepoContext = useContext(PatientRepoContext);
  const incidentRepoContext = useContext(IncidentReportRepoContext);

  const [firstNameOfUser, onChangeFirstName] = useState('');
  const [lastNameOfUser, onChangeLastName] = useState('');
  const [ageOfUser, onChangeAge] = useState('');
  const [weightOfUser, onChangeWeight] = useState('');

  const onCreatePatient = (firstName, lastName, age, weight) => {
    if (patientRepoContext !== null) {
      patientRepoContext.createPatient(firstName, lastName, age, weight).then(
        (patientId) => {
          patientRepoContext.getPatient(patientId).then((patientRet) => {
            setPatient(patientRet);
          });
        },
        (err) => console.log('Error: ' + err),
      );
    } else {
      console.log('null patientRepo');
    }
  };
  const patientsArray = [];
  const parsePatients = (pts) => {
    if (pts !== undefined) {
      pts.forEach((element) => {
        patientsArray.push(element.first_name);
        patientsArray.push(element.last_name);
        patientsArray.push(element.patient_id);
      });
    }
    return patientsArray;
  };

  const onGetPatients = () => {
    if (patientRepoContext !== null) {
      patientRepoContext
        .getAllPatients()
        .then((pts) => setPatients(parsePatients(pts)));
    } else {
      console.log('null patientRepo');
    }
  };

  const handleUpdateReportNewPatient = () => {
    incidentRepoContext.updateReport(patient.patientId, reportId).then(
      (rowsAffected) => console.log(rowsAffected),
      (err) => console.log(err),
    );
  };

  const handleUpdateReportExistingPatient = (pid) => {
    incidentRepoContext.updateReport(pid, reportId).then(
      (rowsAffected) => console.log(rowsAffected),
      (err) => console.log(err),
    );
  };

  onGetPatients();
  let otherUsers = [];
  if (patients.length > 0) {
    for (let i = 0; i < patients.length; i += 3) {
      const username = patients[i] + ' ' + patients[i + 1];
      const pid = patients[i + 2];
      otherUsers.push(
        <TouchableOpacity
          key={i}
          style={styles.selectUserButton}
          onPress={() => {
            handleUpdateReportExistingPatient(pid);
            navigation.navigate('Home');
          }}
        >
          <Text style={uiStyle.buttonLabel}>{username}</Text>
        </TouchableOpacity>,
      );
    }
  } else {
    otherUsers.push(
      <Text key={-1} style={styles.text}>
        There is no other user can be selected.
      </Text>,
    );
  }
  return (
    <SafeAreaView style={uiStyle.container}>
      <Text style={styles.text}>
        Enter your details and the results will be saved in your profile
      </Text>
      <SafeAreaView style={styles.inputAreaContainer}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeFirstName}
            value={firstNameOfUser}
            placeholder="First Name"
            returnKeyType="done"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeLastName}
            value={lastNameOfUser}
            placeholder="Last Name"
            returnKeyType="done"
          />
          <TextInput
            maxLength={3}
            style={styles.input}
            onChangeText={onChangeAge}
            value={ageOfUser}
            placeholder="Age"
            keyboardType="number-pad"
            returnKeyType="done"
          />
          <TextInput
            maxLength={3}
            style={styles.input}
            onChangeText={onChangeWeight}
            value={weightOfUser}
            placeholder="Weight in kg"
            keyboardType="numeric"
            returnKeyType="done"
          />
          <Text style={styles.text}>Or select existing User</Text>
          {otherUsers}
          <Text>
            You will be able to view your result of your check or report anytime
            your profile
          </Text>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              onCreatePatient(
                firstNameOfUser,
                lastNameOfUser,
                ageOfUser,
                weightOfUser,
              );
              handleUpdateReportNewPatient();
              navigation.navigate('Home');
            }}
          >
            <Text style={uiStyle.buttonLabel}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  inputAreaContainer: {
    flex: 1,

    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderRadius: 50,
    padding: 10,
    backgroundColor: '#D3D3D3',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    marginHorizontal: 50,
    marginVertical: 10,
  },
  selectUserButton: {
    width: 300,
    height: 50,
    padding: 10,
    borderRadius: 100,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#FFA500',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButton: {
    left: 10,
    width: 300,
    height: 50,
    padding: 10,
    marginVertical: 10,
    borderRadius: 100,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CreateProfileScreen;
