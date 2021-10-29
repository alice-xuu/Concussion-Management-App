import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/screens/HomeScreen';
import MechanismOfInjuryCheck from './app/screens/MechanismOfInjuryCheck';
import CreateProfileScreen from './app/screens/CreateProfileScreen';
import SelectProfileScreen from './app/screens/SelectProfileScreen';
import ProfileInfoScreen from './app/screens/ProfileInfoScreen';
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
import VomsVorVertical from './app/screens/VomsTests/Vor/VomsVorVertical';
import VomsVorVerticalFour from './app/screens/VomsTests/Vor/VomsVorVerticalFour';
import VomsVorResponseFive from './app/screens/VomsTests/Vor/VomsVorResponseFive';

import VomsStart from './app/screens/VomsTests/Row 1/VomsStart';
import VomsInitialSymptoms from './app/screens/VomsTests/Row 1/VomsInitialSymptoms';
import VomsTestSp1 from './app/screens/VomsTests/Row 1/VomsTestSp1';
import VomsTestSp2 from './app/screens/VomsTests/Row 1/VomsTestSp2';
import VomsTestSp3 from './app/screens/VomsTests/Row 1/VomsTestSp3';
import VomsTestSp4 from './app/screens/VomsTests/Row 1/VomsTestSp4';
import VomsResponse1 from './app/screens/VomsTests/Row 1/VomsResponse1';
import VomsS1 from './app/screens/VomsTests/Row 2/VomsS1';
import VomsSP3 from './app/screens/VomsTests/Row 2/VomsSP3';
import VomsSP4 from './app/screens/VomsTests/Row 2/VomsSP4';
import VomsResponse2 from './app/screens/VomsTests/Row 2/VomsResponse2';
import Disclaimer from './app/screens/Disclaimer';
import VomsNPC1 from './app/screens/VomsTests/Row4/VomsNPC1';
import VomsNPC2 from './app/screens/VomsTests/Row4/VomsNPC2';
import VomsNPC3 from './app/screens/VomsTests/Row4/VomsNPC3';
import VomsResponse4 from './app/screens/VomsTests/Row4/VomsResponse4';
import ChooseProfileScreen from './app/screens/ChooseProfileScreen';
import VomsS5 from './app/screens/VomsTests/Row 2/VomsS5';

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
        <RootStack.Navigator initialRouteName="Disclaimer">
          <RootStack.Screen name="Home" component={HomeScreen} />
          <RootStack.Screen name="Disclaimer" component={Disclaimer} />
          <RootStack.Screen
            name="Choose Profile"
            component={ChooseProfileScreen}
          />
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
          <RootStack.Screen name="Profile Info" component={ProfileInfoScreen} />
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
          <RootStack.Screen
            name="Voms Initial Symptoms"
            component={VomsInitialSymptoms}
          />
          <RootStack.Screen name="Voms Test SP 1" component={VomsTestSp1} />
          <RootStack.Screen name="Voms Test SP 2" component={VomsTestSp2} />
          <RootStack.Screen name="Voms Test SP 3.1" component={VomsTestSp3} />
          <RootStack.Screen name="Voms Test SP 4.1" component={VomsTestSp4} />
          <RootStack.Screen name="Voms Response 1" component={VomsResponse1} />

          <RootStack.Screen name="Voms Test S 1" component={VomsS1} />
          <RootStack.Screen name="Voms Test SP 3" component={VomsSP3} />
          <RootStack.Screen name="Voms Test S 5" component={VomsS5} />
          <RootStack.Screen name="Voms Test SP 4" component={VomsSP4} />
          <RootStack.Screen name="Voms Response 2" component={VomsResponse2} />

          <RootStack.Screen name="Voms Test Vor 1" component={VomsVorOne} />
          <RootStack.Screen name="Voms Test Vor 2" component={VomsVorTwo} />
          <RootStack.Screen name="Voms Test Vor 3" component={VomsVorThree} />
          <RootStack.Screen
            name="Voms Test Vor Vertical"
            component={VomsVorVertical}
          />
          <RootStack.Screen
            name="Voms Test Vor Vertical 4"
            component={VomsVorVerticalFour}
          />
          <RootStack.Screen
            name="Voms Test Vor Vertical Response"
            component={VomsVorResponseFive}
          />

          <RootStack.Screen name="Voms Test VMS 1" component={VomsVorOne} />
          <RootStack.Screen name="Voms Test VMS 2" component={VomsVorTwo} />
          <RootStack.Screen name="Voms Test VMS 3" component={VomsVorThree} />

          <RootStack.Screen name="Voms Test NPC 1" component={VomsNPC1} />
          <RootStack.Screen name="Voms Test NPC 2" component={VomsNPC2} />
          <RootStack.Screen name="Voms Test NPC 3" component={VomsNPC3} />
          <RootStack.Screen
            name="Voms Test Response 4"
            component={VomsResponse4}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </GlobalContextProvider>
  );
}
