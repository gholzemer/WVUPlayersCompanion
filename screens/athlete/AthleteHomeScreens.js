import React from 'react';
import {View, Button} from 'react-native';

function AthleteHomeScreen({ navigation }) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Premade Programs"
        onPress={() => navigation.navigate('ProgramsScreen')} />
    <Button title="Exercises"
        onPress={() => navigation.navigate('ExercisesScreen')} />
    <Button title="Progress"
        onPress={() => navigation.navigate('AthleteStatsScreen')} />
    <Button title="Notes"
        onPress={() => navigation.navigate('NotesScreen')} />
    </View>
  );
}

export default AthleteHomeScreen;