import React from 'react';
import {View, Button} from 'react-native';

function ProgramPreviewScreen({ navigation }) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Start"
        onPress={() => navigation.navigate('SelectedProgramScreen')} />
    </View>
  );
}

export default ProgramPreviewScreen;