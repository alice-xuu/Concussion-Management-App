import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

function HomeScreen({ navigation }) {
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
