import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';
import {GetVideo2} from '../query.js';
import { MediumButton } from '../src/components/Buttons';
videoURL = GetVideo2(test);


function HomeScreen({ navigation }) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: "center", gap: 20 }}>
      <MediumButton text="AT View"
        onPress={() => navigation.navigate('ATHomeScreen')} />
      <MediumButton text="Athlete View"
        onPress={() => navigation.navigate('AthleteHomeScreen')} />
      <WebView style={styles.container}
      source={{ uri: videoURL }}/>
    </View>

  );
}

const styles = StyleSheet.create({
  container:{
    marginTop: 30,
    width: 300,
    height: 50,
  }
});
export default HomeScreen;
