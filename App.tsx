/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component} from 'react';
import type {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
  Alert,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import loginScreen from './src/screens/loginScreen/index.tsx';
import globalStyleSheet from './src/styles.tsx';

const Stack = createNativeStackNavigator();

function NavigationStack(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Login"
        component={LoginScreen}
        />
      </Stack.Navigator>
  </NavigationContainer>
  );
};

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
            <Button 
              title="Login"
              onPress={()=>
                navigation.navigate('Login')
              }
            />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default class ApplicationMain extends Component {

  constructor(props) {
    super(props);
    this._onPressButton = this._onPressButton.bind(this);
  }


  _onPressButton({navigation}) {
    Alert.alert('Routing to Login...');
    navigation.navigate('Login');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
        </View>
        <View style={styles.buttonText}>
          <Button style={styles.buttonText} onPress={() => this._onPressButton(this.props)} title="Login" />
        </View>
      </View>
    );
  };

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    margin: 20,
    backgroundColor: '#212121',
    borderRadius: 15,
    padding: 10,
    width: '50%'
  },
  buttonText: {
    color: 'white',
    frontWeight: 'bold',
    fontSize: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
