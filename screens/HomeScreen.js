import React from 'react';
import {View, Button} from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="AT View"
        onPress={() => navigation.navigate('ATHomeScreen')} />
      <Button title="Athlete View"
        onPress={() => navigation.navigate('AthleteHomeScreen')} />
    </View>
  );
}

export default HomeScreen;
