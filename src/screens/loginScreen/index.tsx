

import React, {Component} from 'react';
import {Text, Headline, Button, Caption} from 'react-native-paper';
import {
    View,
    ToastAndroid,
    FlatList,
    Dimensions,
    Animated,
    Vibration,
    TouchableWithoutFeedback,
  } from 'react-native';


class LoginScreen extends Component {
    
    render(): JSX.Element {
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
                  <Headline>Hello</Headline>
                
    
              </View>
            </ScrollView>
          </SafeAreaView>
        );
    }
}

export default loginScreen;