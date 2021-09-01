import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/screens/HomeScreen';
import DocumentsScreen from './app/screens/DocumentsScreen';
import SingleChoiceQuestionScreen from './app/screens/SingleChoiceQuestionScreen';
import CreateProfileScreen from './app/screens/CreateProfileScreen';
import IncidentReportScreen from './app/screens/IncidentReportScreen';
import StartCheckScreen from './app/screens/StartCheckScreen';
import BadCheckScreen from './app/screens/BadCheckScreen';
import TextQuestionScreen from './app/screens/TextQuestionScreen';
import MemoryTestScreen from './app/screens/MemoryTestScreen';
import ReactionTestScreen from './app/screens/ReactionTestScreen';
import IncidentReportResultScreen from './app/screens/IncidentReportResultScreen';
import SampleDatabaseScreen from './app/screens/SampleDatabaseScreen';
import CheckListQuestionScreen from './app/screens/ChecklistQuestionScreen';

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
          name="Create Profile"
          component={CreateProfileScreen}
        />
        <RootStack.Screen
          name="SingleChoiceQ"
          component={SingleChoiceQuestionScreen}
        />
        <RootStack.Screen
          name="Record Incident"
          component={IncidentReportScreen}
        />
        <RootStack.Screen name="Start Check" component={StartCheckScreen} />
        <RootStack.Screen name="CheckList" component={CheckListQuestionScreen} />
        <RootStack.Screen name="Questions" component={TextQuestionScreen} />
        <RootStack.Screen name="Check Result" component={BadCheckScreen} />
        <RootStack.Screen
          name="Incident Report Result"
          component={IncidentReportResultScreen}
        />
        <RootStack.Screen name="Memory Test" component={MemoryTestScreen} />
        <RootStack.Screen name="Reaction Test" component={ReactionTestScreen} />
        <RootStack.Screen
          name="Database Sample"
          component={SampleDatabaseScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
