import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/screens/HomeScreen';
import DocumentsScreen from './app/screens/DocumentsScreen';
import MechanismOfInjuryCheck from './app/screens/MechanismOfInjuryCheck';
import CreateProfileScreen from './app/screens/CreateProfileScreen';
import SelectProfileScreen from './app/screens/SelectProfileScreen';
import RedFlagsChecklist from './app/screens/RedFlagsChecklist';
import BadCheckScreen from './app/screens/BadCheckScreen';
import TextQuestionScreen from './app/screens/TextQuestionScreen';
import ReactionTestScreen from './app/screens/ReactionTestScreen';
import SecondCheckResults from './app/screens/SecondCheckResults';
import SampleDatabaseScreen from './app/screens/SampleDatabaseScreen';
import MTOne from './app/screens/MemoryTests/MTOne';
import MTTwo from './app/screens/MemoryTests/MTTwo';
import MTThree from './app/screens/MemoryTests/MTThree';
import MTFour from './app/screens/MemoryTests/MTFour';
import MTFive from './app/screens/MemoryTests/MTFive';

import NextStepsScreen from './app/screens/NextStepsScreen';
import ChecklistQuestionScreen from './app/screens/RedFlagsChecklist';
import { GlobalContextProvider } from './app/components/GlobalContextProvider';

import PCSSChecklist from './app/screens/PCSSChecklist';
import FurtherTestsScreen from './app/screens/FurtherTestsScreen';
import FurtherTestsResultsScreen from './app/screens/FurtherTestsResultsScreen';
import RTOne from './app/screens/ReactionTests/RTOne';
import RTTwo from './app/screens/ReactionTests/RTTwo';
import RTThree from './app/screens/ReactionTests/RTThree';
import BTOne from './app/screens/BalanceTests/BTOne';
import BTTwo from './app/screens/BalanceTests/BTTwo';
import BTThree from './app/screens/BalanceTests/BTThree';
import VomsVorOne from './app/screens/VomsTests/Vor/VomsVorOne';
import VomsVorTwo from './app/screens/VomsTests/Vor/VomsVorTwo';
import VomsVorThree from './app/screens/VomsTests/Vor/VomsVorThree';
import VomsStart from "./app/screens/VomsTests/Row 1/VomsStart";

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
            name="Sample Database"
            component={SampleDatabaseScreen}
          />
          <RootStack.Screen
            name="Create Profile"
            component={CreateProfileScreen}
          />
          <RootStack.Screen
            name="Select Profile"
            component={SelectProfileScreen}
          />
          <RootStack.Screen
            name="Red flags checklist"
            component={RedFlagsChecklist}
          />
          <RootStack.Screen name="PCSS Checklist" component={PCSSChecklist} />
          <RootStack.Screen name="Next Steps" component={NextStepsScreen} />
          <RootStack.Screen
            name="Mechanism Of Injury Check"
            component={MechanismOfInjuryCheck}
          />
          <RootStack.Screen
            name="Text Question (IR3)"
            component={TextQuestionScreen}
          />
          <RootStack.Screen
            name="Checklist Question (Start Check)"
            component={ChecklistQuestionScreen}
          />
          <RootStack.Screen name="Check Result" component={BadCheckScreen} />
          <RootStack.Screen
            name="Incident Report Result"
            component={SecondCheckResults}
          />
          <RootStack.Screen
            name="Further Tests"
            component={FurtherTestsScreen}
          />

          <RootStack.Screen
            name="Further Tests Results"
            component={FurtherTestsResultsScreen}
          />

          <RootStack.Screen name="Memory Test 1" component={MTOne} />
          <RootStack.Screen name="Memory Test 2" component={MTTwo} />
          <RootStack.Screen name="Memory Test 3" component={MTThree} />
          <RootStack.Screen name="Memory Test 4" component={MTFour} />

          <RootStack.Screen name="Reaction Test 1" component={RTOne} />
          <RootStack.Screen name="Reaction Test 2" component={RTTwo} />
          <RootStack.Screen name="Reaction Test 3" component={RTThree} />
          <RootStack.Screen name="Balance Test 1" component={BTOne} />
          <RootStack.Screen name="Balance Test 2" component={BTTwo} />
          <RootStack.Screen name="Balance Test 3" component={BTThree} />

          <RootStack.Screen name="Memory Test 5" component={MTFive} />

          <RootStack.Screen name="Voms Start" component={VomsStart} />

          <RootStack.Screen name="Voms Test Vor 1" component={VomsVorOne} />
          <RootStack.Screen name="Voms Test Vor 2" component={VomsVorTwo} />
          <RootStack.Screen name="Voms Test Vor 3" component={VomsVorThree} />
        </RootStack.Navigator>
      </NavigationContainer>
    </GlobalContextProvider>
  );
}
