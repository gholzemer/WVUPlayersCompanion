import React from 'react';
import {View, Button} from 'react-native';

function SelectedProgramScreen({ navigation }) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Continue"
        onPress={() => navigation.navigate('WorkoutScreen')} />
    </View>
  );
}

export default SelectedProgramScreen;