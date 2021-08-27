import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Dimensions } from 'react-native';

/**
 * Asks user for details about the concussion and gives a suggestion based on
 * the user's responses.
 */
const width = Dimensions.get('window').width;

function TextQuestionScreen({ navigation }) {
  const [value, onChangeText] = React.useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.font}> Is there any symptoms for the patients?</Text>

      <TextInput
        style={styles.content}
        onChangeText={(text) => onChangeText(text)}
        textDecorationLine={'none'}
        value={value}
        multiline={true}
      />
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Check Result')}
      >
        <Text style={styles.label}>Confirm</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  font: {
    color: '#000000',
    fontSize: 17,
    fontWeight: 'normal',
  },
  content: {
    maxHeight: 100,
    marginVertical: 20,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'grey',
    marginBottom: 16,
    paddingLeft: 10,
    padding: 0,
    width: width - 32,
  },
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
});

export default TextQuestionScreen;
