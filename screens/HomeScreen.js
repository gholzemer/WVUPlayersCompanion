import React from 'react';
import {View, Button} from 'react-native';
import { MediumButton } from '../src/components/Buttons';
function HomeScreen({ navigation }) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <MediumButton text="AT View"
        onPress={() => navigation.navigate('ATHomeScreen')} />
      <MediumButton text="Athlete View"
        onPress={() => navigation.navigate('AthleteHomeScreen')} />
    </View>
  );
}

export default HomeScreen;
