import React from 'react';
import {View, Button} from 'react-native';

function WorkoutScreen({ navigation }) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Done"
        onPress={() => navigation.navigate('CompletedWorkoutScreen')} />
    </View>
  );
}

export default WorkoutScreen;