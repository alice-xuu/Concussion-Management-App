import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  PatientContext,
  PatientRepoContext,
} from '../components/GlobalContextProvider';
import { useContext, useState } from 'react';
import uiStyle from '../components/uiStyle';
/**
 * The screen will ask user to fill in details so their result can be saved in
 * their account.
 */
function CreateProfileScreen({ navigation }) {
  // Context variables
  const [, setPatient] = useContext(PatientContext);
  const [patients, setPatients] = useContext(PatientContext);
  const patientRepoContext = useContext(PatientRepoContext);

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
    pts.forEach((element) => {
      patientsArray.push(element.first_name + ' ' + element.last_name);
    });
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

  onGetPatients();
  const userNum = patients.length;
  // console.log(patients.length);
  let otherUsers = [];
  if (userNum > 0) {
    for (let i = 0; i < userNum; i++) {
      const username = patients[i];
      otherUsers.push(
        <TouchableOpacity key={i} style={styles.selectUserButton}>
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
  // console.log(otherUsers.length);
  return (
    <View style={uiStyle.container}>
      <Text style={styles.text}>
        Enter your details and the results will be saved in your profile
      </Text>
      <View style={styles.inputAreaContainer}>
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
      </View>
      <Text style={styles.text}>
        You will be able to view your result of your check or report anytime in
        your profile
      </Text>
      <TouchableOpacity
        style={uiStyle.bottomButton}
        onPress={() => {
          onCreatePatient(
            firstNameOfUser,
            lastNameOfUser,
            ageOfUser,
            weightOfUser,
          );
          navigation.navigate('Home');
        }}
      >
        <Text style={uiStyle.buttonLabel}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputAreaContainer: {
    flex: 1,
    alignItems: 'flex-start',
    marginHorizontal: 50,
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
});

export default CreateProfileScreen;
