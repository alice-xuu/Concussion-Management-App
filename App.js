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
import ReactionTestScreen from './app/screens/ReactionTestScreen';
import IncidentReportResultScreen from './app/screens/IncidentReportResultScreen';
import SampleDatabaseScreen from './app/screens/SampleDatabaseScreen';
import MTOne from './app/screens/MemoryTests/MTOne';
import MTTwo from './app/screens/MemoryTests/MTTwo';
import MTThree from './app/screens/MemoryTests/MTThree';
import MTFour from './app/screens/MemoryTests/MTFour';
import NextStepsScreen from './app/screens/NextStepsScreen';
import ChecklistQuestionScreen from './app/screens/ChecklistQuestionScreen';
import { GlobalContextProvider } from './app/components/GlobalContextProvider';
//import InjurySusScreen from './app/screens/InjurySusScreen';

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
          name="Record Incident"
          component={IncidentReportScreen}
        />
        <RootStack.Screen
          name="Record Incident questionnaire 1"
          component={ChecklistQuestionScreen}
        />
        <RootStack.Screen name="Start Check" component={StartCheckScreen} />
        {/* bracket IR refers to incident report in the figma */}
        <RootStack.Screen name="Next Steps (IR1)" component={NextStepsScreen} />
        <RootStack.Screen
          name="SingleChoiceQ (IR2)"
          component={SingleChoiceQuestionScreen}
        />
        <RootStack.Screen
          name="Text Question (IR3)"
          component={TextQuestionScreen}
        />
        <RootStack.Screen
          name="Checklist Question (IR4)"
          component={ChecklistQuestionScreen}
        />

        <RootStack.Screen name="Check Result" component={BadCheckScreen} />
        <RootStack.Screen
          name="Incident Report Result"
          component={IncidentReportResultScreen}
        />
        <RootStack.Screen name="Memory Test 1" component={MTOne} />
        <RootStack.Screen name="Memory Test 2" component={MTTwo} />
        <RootStack.Screen name="Memory Test 3" component={MTThree} />
        <RootStack.Screen name="Memory Test 4" component={MTFour} />

        <RootStack.Screen name="Reaction Test" component={ReactionTestScreen} />
        <RootStack.Screen
          name="Database Sample"
          component={SampleDatabaseScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  </GlobalContextProvider>
  );
}
