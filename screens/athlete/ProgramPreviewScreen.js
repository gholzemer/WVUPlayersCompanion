import 'react-native-gesture-handler'
import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {View, Text, TextField, Card, Colors, Button} from 'react-native-ui-lib'
import { WebView } from 'react-native-webview';

function ProgramPreviewScreen({ navigation }) {
  return (
    <ScrollView flex paddingH-25 paddingT-20>
      <ScrollView horizontal = {true} flex paddingH-25 paddingT-20 backgroundColor = {"#121212"}>
        <Card
          height={50}
          width ={400}
          backgroundColor = "#515151"
          flex
          marginR-100
          marginL-100
       >
          <Card.Section
            content={[{text: 'Estimated Time of Workout', text20: true, white: true}]}
            contentStyle={{alignItems: 'center', backgroundColor: '#627D98'}}/>
        </Card>
      </ScrollView>
      
      <ScrollView horizontal = {true} flex paddingH-25 paddingT-20 backgroundColor = {"#121212"}>
        <Card
          height={150}
          width ={600}
          backgroundColor = "#515151"
          flex
          marginR-50
          marginL-50
       >
          <Card.Section
            content={[{text: 'Exercise Name/Duration', text20: true, white: true}]}
            contentStyle={{alignItems: 'center', backgroundColor: '#627D98'}}/>
        </Card>
      </ScrollView>
      
      <ScrollView horizontal = {true} flex paddingH-25 paddingT-20 backgroundColor = {"#121212"}>
        <Card
          height={150}
          width ={600}
          backgroundColor = "#515151"
          flex
          marginR-50
          marginL-50
       >
          <Card.Section
            content={[{text: 'Exercise Name/Duration', text20: true, white: true}]}
            contentStyle={{alignItems: 'center', backgroundColor: '#627D98'}}/>
        </Card>
      </ScrollView>

      {/* <Button title="Start"
        onPress={() => navigation.navigate('SelectedProgramScreen')} /> */}
    
    </ScrollView>
  );
}

export default ProgramPreviewScreen;