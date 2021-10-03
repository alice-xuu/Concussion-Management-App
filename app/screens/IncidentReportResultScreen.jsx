import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useContext, useEffect, useRef, useState } from 'react';
import {
  IncidentReportRepoContext,
  ReportIdContext,
} from '../components/GlobalContextProvider';
import uiStyle from '../components/uiStyle';

const parseMultiResponses = (mrs) => {
  const responsesArray = [];
  if (mrs !== null) {
    // console.log(mrs);
    mrs.forEach((element) => {
      if (element.MultiResponsePart.response !== undefined) {
        responsesArray.push('Yes');
      }
    });
  }
  return responsesArray;
};

const parseSingleResponses = (srs) => {
  let responsesArray = [];
  if (srs !== null) {
    srs.forEach((element) => {
      if (element.response === 'YES') {
        responsesArray.push('Yes');
      }
    });
  }
  return responsesArray;
};
let reportResults = 0;

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
  let screen;

  useEffect(() => {
    // Get single responses
    reportResults = 0;
    incidentRepoContext.getSingleResponses(reportId).then((srs) => {
      if (mounted.current) {
        setResponses(parseSingleResponses(srs));
      }
    });

    // Get multi-responses
    incidentRepoContext.getMultiResponses(reportId).then((mrs) => {
      if (mounted.current) {
        setResponses(parseMultiResponses(mrs));
      }
    });
  }, [incidentRepoContext, reportId]);

  // console.log(responses);
  if (responses !== null) {
    responses.forEach((element) => {
      if (element === 'Yes') {
        reportResults++;
      }
    });
  }
  if (reportResults > 0) {
    screen = (
      <ScrollView styles={styles.scroll}>
        <View style={uiStyle.container}>
          <Text style={styles.text}>
            The affected individual is displaying some symptoms of concussion.
            {'\n'} {'\n'}
            We strongly recommend you complete our further testing.
            {'\n'} {'\n'}
            If you are concerned, immediately see a GP.
          </Text>
          <View style={styles.textContainer}>
            <TouchableOpacity
              style={styles.bottomButton}
              onPress={() => navigation.navigate('Create Profile')}
            >
              <Text style={styles.buttonLabel}>Save to new profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bottomButton}
              onPress={() => navigation.navigate('Select Profile')}
            >
              <Text style={styles.buttonLabel}>Save to existing profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bottomButton}
              onPress={() => navigation.navigate('Further Tests')}
            >
              <Text style={styles.buttonLabel}>Further Testing</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  } else {
    screen = (
      <ScrollView styles={styles.scroll}>
        <View style={uiStyle.container}>
          <Text style={styles.text}>
            There is a low probability of a concussion injury.
            {'\n'} {'\n'}
            However, we strongly recommend you immediately remove yourself from
            play and complete our further tests.
            {'\n'} {'\n'}
            You should rest for the next 24 hours. If symptoms should develop,
            see a GP immediately.
          </Text>
          <View style={styles.textContainer}>
            <TouchableOpacity
              style={styles.bottomButton}
              onPress={() => navigation.navigate('Create Profile')}
            >
              <Text style={styles.buttonLabel}>Save to new profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bottomButton}
              onPress={() => navigation.navigate('Select Profile')}
            >
              <Text style={styles.buttonLabel}>Save to existing profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bottomButton}
              onPress={() => navigation.navigate('Further Tests')}
            >
              <Text style={styles.buttonLabel}>Further Testing</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }

  return (
    <SafeAreaView style={uiStyle.container}>
      <Text style={uiStyle.titleText}>Result</Text>
      <ScrollView>{screen}</ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1, alignItems: 'center' },
  bottomButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: '#ff0000',
    marginHorizontal: 50,
    marginVertical: 10,
    width: 300,
    height: 50,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  text: {
    fontSize: 18,
    lineHeight: 30,
    letterSpacing: 0.25,
    marginHorizontal: 50,
    marginVertical: 20,
  },
  container: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default IncidentReportResultScreen;
