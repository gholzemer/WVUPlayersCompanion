import React from 'react';
import {View, Button} from 'react-native';

function ProgramsScreen({ navigation }) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Select Program"
        onPress={() => navigation.navigate('ProgramPreviewScreen')} />
    </View>
  );
}

export default ProgramsScreen;