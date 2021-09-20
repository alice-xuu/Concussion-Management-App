import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/screens/HomeScreen';
import DocumentsScreen from './app/screens/DocumentsScreen';
import SingleChoiceQuestionScreen from './app/screens/SingleChoiceQuestionScreen';
import CreateProfileScreen from './app/screens/CreateProfileScreen';
import SelectProfileScreen from './app/screens/SelectProfileScreen';
import StartCheckScreen from './app/screens/StartCheckScreen';
import BadCheckScreen from './app/screens/BadCheckScreen';
import TextQuestionScreen from './app/screens/TextQuestionScreen';
import ReactionTestScreen from './app/screens/ReactionTestScreen';
import IncidentReportResultScreen from './app/screens/IncidentReportResultScreen';
import SampleDatabaseScreen from './app/screens/SampleDatabaseScreen';
import MTOne from './app/screens/MemoryTests/MTOne';
import MTTwo from './app/screens/MemoryTests/MTTwo';
import MTThree from './app/screens/MemoryTests/MTThree';
import MTFour from './app/screens/MemoryTests/MTFour';
import NextStepsScreen from './app/screens/NextStepsScreen';
import ChecklistQuestionScreen from './app/screens/StartCheckScreen';
import { GlobalContextProvider } from './app/components/GlobalContextProvider';

import IncidentReportFourScreen from './app/screens/IncidentReportFourScreen';
import IncidentReportFiveScreen from './app/screens/IncidentReportFiveScreen';
import FurtherTestsScreen from './app/screens/FurtherTestsScreen';

const RootStack = createNativeStackNavigator();
/**
 * The entry point for the application.
 *
 * Contains the root navigation stack.
 */
export default function App() {
  return (
    <GlobalContextProvider>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Home">
          <RootStack.Screen name="Home" component={HomeScreen} />
          <RootStack.Screen name="Documents" component={DocumentsScreen} />
          <RootStack.Screen
            name="Create Profile"
            component={CreateProfileScreen}
          />
          <RootStack.Screen
            name="Select Profile"
            component={SelectProfileScreen}
          />
          <RootStack.Screen name="Start Check" component={StartCheckScreen} />
          <RootStack.Screen
            name="Incident report 4"
            component={IncidentReportFourScreen}
          />
          {/* bracket IR refers to incident report in the figma */}
          <RootStack.Screen
            name="Next Steps (IR1)"
            component={NextStepsScreen}
          />
          <RootStack.Screen
            name="SingleChoiceQ (IR2)"
            component={SingleChoiceQuestionScreen}
          />
          <RootStack.Screen
            name="Text Question (IR3)"
            component={TextQuestionScreen}
          />
          <RootStack.Screen
            name="Checklist Question (Start Check)"
            component={ChecklistQuestionScreen}
          />

          <RootStack.Screen name="IR 5" component={IncidentReportFiveScreen} />

          <RootStack.Screen name="Check Result" component={BadCheckScreen} />
          <RootStack.Screen
            name="Incident Report Result"
            component={IncidentReportResultScreen}
          />

          <RootStack.Screen
            name="Further Tests"
            component={FurtherTestsScreen}
          />

          <RootStack.Screen name="Memory Test 1" component={MTOne} />
          <RootStack.Screen name="Memory Test 2" component={MTTwo} />
          <RootStack.Screen name="Memory Test 3" component={MTThree} />
          <RootStack.Screen name="Memory Test 4" component={MTFour} />

          <RootStack.Screen
            name="Reaction Test"
            component={ReactionTestScreen}
          />
          <RootStack.Screen
            name="Database Sample"
            component={SampleDatabaseScreen}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </GlobalContextProvider>
  );
}
