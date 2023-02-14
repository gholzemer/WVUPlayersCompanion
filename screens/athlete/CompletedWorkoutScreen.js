import React from 'react';
import {View, Button} from 'react-native';

function CompletedWorkoutScreen({ navigation }) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Notes"
        onPress={() => navigation.navigate('NotesScreen')} />
      <Button title="AT sign off"
        onPress={() => navigation.navigate('AthleteHomeScreen')} />
    </View>
  );
}

export default CompletedWorkoutScreen;