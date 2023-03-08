import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

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

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "end",
    justifyContent: "center",
  },
  video: {
    alignSelf: 'center',
    width: 250,
    height: 200,
  },
});

export default ATHomeScreen;
