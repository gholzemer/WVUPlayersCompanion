import React from 'react';
import {View, Button} from 'react-native';

function ATHomeScreen({ navigation }) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Roster"
        onPress={() => navigation.navigate('RosterScreen')} />
      <Button title="Stats"
        onPress={() => navigation.navigate('AthleteStatsScreen')} />
      <Button title="Create/Edit Program"
        onPress={() => navigation.navigate('NewProgramScreen')} />
      <Button title="Create/Edit Excercises"
        onPress={() => navigation.navigate('NewExerciseScreen')} />
      <Button title="Change Featured Program"
        onPress={() => navigation.navigate('FeaturedProgramsScreen')} />
    </View>
  );
}

export default ATHomeScreen;
