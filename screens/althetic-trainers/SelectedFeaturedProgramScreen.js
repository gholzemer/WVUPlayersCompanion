import React from 'react';
import {View, Button} from 'react-native';

function SelectedFeaturedProgramScreen({ navigation }) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Done"
        onPress={() => navigation.navigate('ATHomeScreen')} />
    </View>
  );
}

export default SelectedFeaturedProgramScreen;