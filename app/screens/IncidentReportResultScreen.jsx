import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Pressable } from 'react-native';
import { useContext, useEffect, useRef, useState } from 'react';
import {
  IncidentReportRepoContext,
  ReportIdContext,
} from '../components/GlobalContextProvider';

/**
 * The screen will show the result after user has completed "IncidentReport"
 * The screen will either be:
 * patient needs to go to GP ASAP,
 * or
 * do further test to assess concussion or go to home and create profile
 */
function IncidentReportResultScreen({ navigation }) {
  // Context variables
  const [reportId] = useContext(ReportIdContext);
  const incidentRepoContext = useContext(IncidentReportRepoContext);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true; // Component is mounted
    return () => {
      // Component is unmounted
      mounted.current = false;
    };
  }, []);

  // Local state
  let [responses, setResponses] = useState(null);

  let responsesArray = [];
  const parseSingleResponses = (srs) => {
    if (srs !== null) {
      srs.forEach((element) => {
        if (element.response === 'YES') {
          responsesArray.push('Yes');
        }
      });
    }
    return responsesArray;
  };
  const parseMultiResponses = (mrs) => {
    if (responses === null) {
      responses = [];
    }
    if (mrs !== null) {
      // console.log(mrs);
      mrs.forEach((element) => {
        if (element.MultiResponsePart.response !== undefined) {
          responses.push('Yes');
        }
      });
    }
    return responses;
  };

  const handleGetSingleResponses = () => {
    incidentRepoContext.getSingleResponses(reportId).then((srs) => {
      if (mounted.current) {
        setResponses(parseSingleResponses(srs));
      }
    });
  };
  const handleGetMultiResponses = () => {
    incidentRepoContext.getMultiResponses(reportId).then((mrs) => {
      if (mounted.current) {
        setResponses(parseMultiResponses(mrs));
      }
    });
  };
  let reportResults = 0;
  let screen;
  handleGetSingleResponses();
  handleGetMultiResponses();
  // console.log(responses);
  if (responses !== null) {
    responses.forEach((element) => {
      if (element === 'Yes') {
        reportResults++;
      }
    });
  }
  if (reportResults > 0) {
    //Have Concussion
    screen = (
      <View>
        <Text style={styles.text}>
          Your patient can not return to play.{'\n'} {'\n'}
          Must see a GP within the next 24 hours.{'\n'} {'\n'}If they develop
          any of the following symptoms.....
        </Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Create Profile')}
        >
          <Text style={styles.label}>Next</Text>
        </Pressable>
      </View>
    );
  } else {
    screen = (
      <View>
        <Text style={styles.text}>
          Your patient can return to play, provided they have had none of the
          signs or symptoms seen previously.{'\n'} {'\n'}
          If they have, please do not allow return to play, and see a GP in the
          next 24 hours.
        </Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Create Profile')}
        >
          <Text style={styles.label}>Home</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Further Tests')}
        >
          <Text style={styles.label}>Further Test</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Result</Text>
      {screen}
    </SafeAreaView>
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
    backgroundColor: 'black',
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
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: 0.25,
    marginHorizontal: 50,
    marginVertical: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default IncidentReportResultScreen;
