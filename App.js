import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/screens/HomeScreen';
import DocumentsScreen from './app/screens/DocumentsScreen';
import RecordIncidentScreen from './app/screens/RecordIncidentScreen';
import ResultScreen from './app/screens/ResultScreen';
import TextQuestionScreen from './app/screens/TextQuestionScreen';

const RootStack = createNativeStackNavigator();

/**
 * The entry point for the application.
 *
 * Contains the root navigation stack.
 */
export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Documents" component={DocumentsScreen} />
        <RootStack.Screen
          name="RecordIncident"
          component={RecordIncidentScreen}
        />
        <RootStack.Screen name="Questions" component={TextQuestionScreen} />
        <RootStack.Screen name="Result" component={ResultScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
