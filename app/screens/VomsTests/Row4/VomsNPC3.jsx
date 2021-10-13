import * as React from 'react';
import {
  Dimensions,
  onChangeText,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import uiStyle from '../../../components/uiStyle';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function VomsNPC3(props) {
  const [value, onChangeText] = React.useState('');

  return (
    <SafeAreaView style={uiStyle.container}>
      <View style={uiStyle.contentContainerCentered}>
        <Text style={uiStyle.text}> Please input the distance.</Text>
        <SafeAreaView style={uiStyle.textContainer}>
          <TextInput
            style={styles.content}
            onChangeText={(text) => onChangeText(text)}
            textDecorationLine={'none'}
            value={value}
            multiline={true}
            numberOfLines={4}
            textAlignVertical="top"
          />
        </SafeAreaView>
      </View>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Voms Test Response 4');
        }}
        style={uiStyle.bottomButton}
      >
        <Text style={uiStyle.buttonLabel}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    maxHeight: 200,
    marginVertical: 0,
    borderWidth: 3,
    borderColor: 'black',
    marginBottom: 50,
    paddingLeft: 10,
    padding: 0,
    width: width - 40,
    height: height - 700,
  }
});

export default VomsNPC3;
