import 'react-native-gesture-handler'
import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {View, Text, TextField, Card, Colors, Button} from 'react-native-ui-lib'
import { WebView } from 'react-native-webview';

{/* Will use database to pull when repo is working properly againt*/}


function WorkoutScreen({ navigation }) {
  return (
    <ScrollView flex paddingH-25 paddingT-20>
      <ScrollView horizontal = {true} flex paddingH-25 paddingT-20 backgroundColor = {"#121212"}>
        <Card
          height={500}
          width ={600}
          backgroundColor = "#515151"
          flex
          marginR-50
          marginL-50
       >
          <Card.Section
            content={[{text: 'Exercise Name', text20: true, white: true}]}
            contentStyle={{alignItems: 'center', backgroundColor: '#627D98'}}/>
          <WebView style={styles.container}
            source={{ uri: 'https://www.youtube.com/embed/T_l0AyZywjU' }}/>
        </Card>
      </ScrollView>
      
      <ScrollView horizontal = {true} flex paddingH-25 paddingT-20 backgroundColor = {"#121212"}>
        <Card
          height={500}
          width ={600}
          backgroundColor = "#515151"
          flex
          marginTop = {50}
          marginR-20
          marginL-20
       >

      <Card.Section
        content={[{text: 'Reps: XX', text20: true, 'white': true}]}
        contentStyle={{alignItems: 'center', backgroundColor: '#627D98'}}/>
        <Text style = {textStyle.container}> A Written Description of the Workout Will Go Here</Text>
      </Card>
      </ScrollView>
      <View marginT-10 paddingRight-20>  
      </View>
      <Button text70 background= {'#FFABO0'} label = "Done"
       onPress={() => navigation.navigate('CompletedWorkoutScreen')} />
    </ScrollView>
  );

}

const styles = StyleSheet.create({
  container:{
    alignSelf: 'center',
    paddingRight: 500,
    marginTop: 15,
    marginBottom: 15,
    width: 300,
    height: 50,
  }
});
const textStyle = StyleSheet.create({
  container:{
    color: 'white',
    fontSize: 28,
    alignSelf: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 15,
    marginBottom: 15
  }
});

export default WorkoutScreen;