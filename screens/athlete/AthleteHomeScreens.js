import React, {useState, useCallback, useRef } from "react";
import {View, Button, StyleSheet} from 'react-native';
import {WebView} from "react-native-webview";

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
      {/* <YoutubePlayer style={styles2.container}
        height ={300}
        width = {300}
        videoID = "laGliAvhLmM"
      /> */}
      <WebView style={styles.container}
      source = {{ html: '<iframe width="1000" height="1000" src="https://www.youtube.com/embed/laGliAvhLmM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width: 300,
    height: 300,
    backgroundColor: 'blue'
  }
});
export default AthleteHomeScreen;