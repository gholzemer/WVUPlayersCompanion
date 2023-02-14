import React from 'react';
import {View, Button} from 'react-native';

function RosterScreen({ navigation }) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Athlete Profile"
        onPress={() => navigation.navigate('AthleteProfileScreen')} />
    </View>
  );
}

export default RosterScreen;