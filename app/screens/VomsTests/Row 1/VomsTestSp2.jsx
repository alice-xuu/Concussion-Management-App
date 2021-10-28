import * as React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Animated,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import uiStyle from '../../../components/uiStyle';
import { useEffect, useRef } from 'react';

function VomsTestSp2({ navigation }) {
  const startValue = useRef(new Animated.Value(0)).current;
  const endRightValue = 320;
  const endLeftValue = -320;
  const halfDuration = 1000;
  const fullDuration = 2000;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(startValue, {
          toValue: endRightValue,
          duration: halfDuration,
          useNativeDriver: true,
        }),
        Animated.timing(startValue, {
          toValue: endLeftValue,
          duration: fullDuration,
          useNativeDriver: true,
        }),
        Animated.timing(startValue, {
          toValue: 0,
          duration: halfDuration,
          useNativeDriver: true,
        }),
      ]),
      { iterations: 2 },
    ).start();
    navigation.navigate('Voms Response 1');
  }, [startValue, endRightValue, endLeftValue, navigation]);

  return (
    <SafeAreaView style={uiStyle.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Voms Response 1')}
        style={uiStyle.bottomButton}
      >
        <Text style={uiStyle.buttonLabel}>Next</Text>
      </TouchableOpacity>
      <View style={styles.circleContainer}>
        <Animated.View
          style={[
            uiStyle.vomsCircle,
            {
              transform: [
                {
                  translateY: startValue,
                },
              ],
            },
          ]}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  circleContainer: {
    ...uiStyle.contentContainer,
    justifyContent: 'center',
  },
});

export default VomsTestSp2;
