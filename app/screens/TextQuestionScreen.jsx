import * as React from "react";
import { useEffect, useState } from "react";
import { Dimensions, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { DatabaseAdapter } from "../model/database/DatabaseAdapter";
import { IncidentReportRepo } from "../model/database/IncidentReportRepo";

/**
 * Asks user for details about the concussion and gives a suggestion based on
 * the user's responses.
 */
const width = Dimensions.get('window').width;

function TextQuestionScreen({ navigation }) {
  const [value, onChangeText] = React.useState('');
  const [incidentRepo, setIncidientRepo] = useState(null);
  const [responses, setResponses] = useState(null);
  // const reportId = useState(1);
  const [reportId] = useState(1);
  const [, setDa] = useState(null);
  useEffect(() => {
    DatabaseAdapter.initDatabase().then((da) => {
      setDa(da);
      setIncidientRepo(new IncidentReportRepo(da));
    });
  }, []);
  const handleResponseDescription = () => {
    const desc = 'text question';
    incidentRepo.addSingleResponse(reportId, desc, value).then(() => {
      incidentRepo
        .getSingleResponses(reportId)
        .then((sr) => setResponses(JSON.stringify(sr)));
    });
  };
  const myFunction = () => {
    // navigation.navigate('Check Result');
    handleResponseDescription();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.font}>
        Is there an alternative explanation for your patient’s symptoms? If yes, please briefly note it down.</Text>

      <TextInput
        style={styles.content}
        onChangeText={(text) => onChangeText(text)}
        textDecorationLine={'none'}
        value={value}
        multiline={true}
        numberOfLines={4}
        textAlignVertical="top"
      />
      <Pressable
        style={styles.button}
        // onPress={() => navigation.navigate('Check Result')}
        // onPress={handleCreateSResponse}
        onPress={myFunction}
      >
        <Text style={styles.label}>Next</Text>
      </Pressable>


    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    marginHorizontal: 50,
    marginVertical: 10,
  },
  content: {
    maxHeight: 100,
    marginVertical: 20,
    borderWidth: 3,

    borderColor: 'black',
    marginBottom: 16,
    paddingLeft: 10,
    padding: 0,
    width: width - 40,
  },
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
});

export default TextQuestionScreen;
