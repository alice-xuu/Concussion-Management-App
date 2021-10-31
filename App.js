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

import VOMSStart from './app/screens/VOMSTests/VOMSStart';
import VOMSInitialSymptoms from './app/screens/VOMSTests/VOMSInitialSymptoms';

import VOMSVorOne from './app/screens/VomsTests/Row3VOR/VOR1';
import VOMSVorTwo from './app/screens/VomsTests/Row3VOR/VOR2';
import VOMSVorThree from './app/screens/VomsTests/Row3VOR/VOR3Response5';
import VOMSVorVertical from './app/screens/VomsTests/Row3VOR/VOR4';
import VOMSVorVerticalFour from './app/screens/VomsTests/Row3VOR/VOR5';
import VOMSVorResponseFive from './app/screens/VomsTests/Row3VOR/VOR6Response6';

import VOMSTestSp2 from './app/screens/VOMSTests/Row 1/VOMSTestSp2';
import VOMSTestSp3 from './app/screens/VOMSTests/Row 1/VOMSTestSp3';
import VOMSTestSp4 from './app/screens/VOMSTests/Row 1/VOMSTestSp4';
import SP1 from './app/screens/VomsTests/Row1SmoothPursuits/SP1';
import SP2 from './app/screens/VomsTests/Row1SmoothPursuits/SP2';
import SP3Response1 from './app/screens/VomsTests/Row1SmoothPursuits/SP3Response1';
import SP5 from './app/screens/VomsTests/Row1SmoothPursuits/SP5';
import SP6Response2 from './app/screens/VomsTests/Row1SmoothPursuits/SP6Response2';

import S1 from './app/screens/VomsTests/Row2Saccades/S1';
import S2 from './app/screens/VomsTests/Row2Saccades/S2';
import S3Response2 from './app/screens/VomsTests/Row2Saccades/S3Response3';
import S4 from './app/screens/VomsTests/Row2Saccades/S4';
import S5 from './app/screens/VomsTests/Row2Saccades/S5';
import S6 from './app/screens/VomsTests/Row2Saccades/S6Response3';
import Disclaimer from './app/screens/Disclaimer';
import VOMSNPC1 from './app/screens/VomsTests/Row4NPC/VOMSNPC1';
import VOMSNPC2 from './app/screens/VomsTests/Row4NPC/VOMSNPC2';
import VOMSNPC3 from './app/screens/VomsTests/Row4NPC/VOMSNPC3';
import VOMSResponse4 from './app/screens/VomsTests/Row4NPC/VOMSResponse4';
import ChooseProfileScreen from './app/screens/ChooseProfileScreen';

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

          <RootStack.Screen name="VOMS Start" component={VOMSStart} />
          <RootStack.Screen
            name="VOMS Initial Symptoms"
            component={VOMSInitialSymptoms}
          />

          <RootStack.Screen name="VOMS Smooth Pursuits 1" component={SP1} />
          <RootStack.Screen name="VOMS Smooth Pursuits 2" component={SP2} />
          <RootStack.Screen
            name="VOMS Smooth Pursuits 3 Response 1"
            component={SP3Response1}
          />
          <RootStack.Screen name="VOMS Smooth Pursuits 4" component={SP4} />
          <RootStack.Screen name="VOMS Smooth Pursuits 5" component={SP5} />
          <RootStack.Screen
            name="VOMS Smooth Pursuits 5 Response 2"
            component={SP6Response2}
          />

          <RootStack.Screen name="VOMS Saccades 1" component={S1} />
          <RootStack.Screen name="VOMS Saccades 2" component={S2} />
          <RootStack.Screen
            name="VOMS Saccades 3 Response 3"
            component={S3Response2}
          />
          <RootStack.Screen name="VOMS Saccades 4" component={S4} />
          <RootStack.Screen name="VOMS Saccades 5" component={S5} />
          <RootStack.Screen name="VOMS Saccades 6 Response 4" component={S6} />

          <RootStack.Screen name="VOMS VOR 1" component={VOMSVorOne} />
          <RootStack.Screen name="VOMS VOR 2" component={VOMSVorTwo} />
          <RootStack.Screen
            name="VOMS VOR 3 Response 5"
            component={VOMSVorThree}
          />
          <RootStack.Screen name="VOMS VOR 4" component={VOMSVorVertical} />
          <RootStack.Screen name="VOMS VOR 5" component={VOMSVorVerticalFour} />
          <RootStack.Screen
            name="VOMS VOR 6 Response 6"
            component={VOMSVorResponseFive}
          />

          <RootStack.Screen name="VOMS NPC 1" component={VOMSNPC1} />
          <RootStack.Screen name="VOMS NPC 2" component={VOMSNPC2} />
          <RootStack.Screen name="VOMS NPC 3" component={VOMSNPC3} />
          <RootStack.Screen
            name="VOMS NPC 4 Response 7"
            component={VOMSResponse4}
          />

          <RootStack.Screen name="VOMS VMS 1" component={VOMSVorOne} />
          <RootStack.Screen name="VOMS VMS 2" component={VOMSVorTwo} />
          <RootStack.Screen
            name="VOMS VMS 3 Response 8"
            component={VOMSVorThree}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </GlobalContextProvider>
  );
}
