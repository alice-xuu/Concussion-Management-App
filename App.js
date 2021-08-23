import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/screens/HomeScreen';
import DocumentsScreen from './app/screens/DocumentsScreen';
import IncidentReportScreen from './app/screens/IncidentReportScreen';

const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Documents" component={DocumentsScreen} />
        <RootStack.Screen
          name="IncidentReport"
          component={IncidentReportScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
