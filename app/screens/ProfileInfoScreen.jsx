import * as React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  IncidentReportRepoContext,
  PatientContext,
  PatientRepoContext,
  ReportIdContext,
} from '../components/GlobalContextProvider';
import { useContext, useState, useRef, useEffect } from 'react';
import uiStyle from '../components/uiStyle';
/**
 * The screen will ask user to choose an existing profile to save the result to
 * their account.
 */
function ProfileInfoScreen({ navigation }) {
  // Context variables
  const [reports, setReports] = useState([]);
  const [patientDetails, setPatientDetails] = useState([]);
  const [reportId, setReportId] = useContext(ReportIdContext);
  const [patient, setPatient] = useContext(PatientContext);
  const patientRepoContext = useContext(PatientRepoContext);
  const incidentRepoContext = useContext(IncidentReportRepoContext);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true; // Component is mounted
    return () => {
      // Component is unmounted
      mounted.current = false;
    };
  }, []);

  const parsePatient = (pt) => {
    const patientArray = [];
    if (pt !== undefined) {
      patientArray.push('First Name: ' + pt.firstName);
      patientArray.push('Last Name: ' + pt.lastName);
      patientArray.push('Age: ' + pt.age);
      patientArray.push('Weight: ' + pt.weight);
    }
    return patientArray;
  };

  const parseReports = (rps) => {
    const reportsArray = [];
    if (rps !== undefined) {
      rps.forEach((element) => {
        reportsArray.push(element.report_id);
      });
    }
    return reportsArray;
  };

  useEffect(() => {
    if (incidentRepoContext !== null) {
      incidentRepoContext.getReports(patient.patientId).then((rps) => {
        if (mounted.current) {
          setReports(parseReports(rps));
        }
      });
    } else {
      console.log('null incidentReportRepo');
    }
    setPatientDetails(parsePatient(patient));
  }, [patient, patientRepoContext, incidentRepoContext]);

  let patientDetailsText = [];
  if (patientDetails.length > 3) {
    patientDetailsText.push(
      <Text key={0} style={styles.text}>
        {patientDetails[0]}
        {'\n'} {'\n'}
        {patientDetails[1]}
        {'\n'} {'\n'}
        {patientDetails[2]}
        {'\n'} {'\n'}
        {patientDetails[3]}
      </Text>,
    );
  }

  let reportsButtons = [];
  if (reports.length > 0) {
    for (let i = 0; i < reports.length; i++) {
      reportsButtons.push(
        <TouchableOpacity
          key={i+1}
          style={styles.selectUserButton}
          onPress={() => {
            // navigation.navigate('Home');
          }}
        >
          <Text style={uiStyle.buttonLabel}>REPORT {i+1}</Text>
        </TouchableOpacity>,
      );
    }
  } else {
    reportsButtons.push(
      <Text key={-1} style={styles.text}>
        There is no existing report.
      </Text>,
    );
  }
  return (
    <SafeAreaView style={uiStyle.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.text}>User Profile</Text>
        {patientDetailsText}
        <Text>You can select reports to view</Text>
        {reportsButtons}
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={uiStyle.buttonLabel}>Back</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    marginHorizontal: 50,
    marginVertical: 10,
  },
  selectUserButton: {
    marginLeft: 10,
    width: 300,
    height: 70,
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#FB582F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomButton: {
    marginLeft: 5,
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

export default ProfileInfoScreen;