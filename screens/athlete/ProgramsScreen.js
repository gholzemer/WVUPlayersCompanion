
import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, Button, TouchableHighlight } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";


const testPrograms = [
  {id: "1", title: "Triceps 1", },
  {id: "2", title: "Biceps 1",},
  {id: "3", title: "Hamstring 1",},
  {id: "4", title: "Triceps 2",},
  {id: "5", title: "Biceps 2",},
  {id: "6", title: "Hamstring 2",},
  {id: "7", title: "Triceps 3",},
  {id: "8", title: "Biceps 3",},
  {id: "9", title: "Hamstring 3",},
  {id: "10", title: "Shoulders",},
];



const Item = ({ title }) => {
  return (
    <View style={styles.item}>
      <Text>{title}</Text>
    </View>
  );
};
const renderItem = ({ item }) => <Item title={item.title} />;


class ProgramScreen extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: testPrograms,
      error: null,
      searchValue: "",
    };
    this.arrayholder = testPrograms;
  }
  
  searchFunction = (text) => {
    const updatedData = this.arrayholder.filter((item) => {
      const item_data = `${item.title.toUpperCase()})`;
      const text_data = text.toUpperCase();
      return item_data.indexOf(text_data) > -1;
    });
    this.setState({ data: updatedData, searchValue: text });
  };

  render() {
    

    return (
      <View style={styles.container}>
        <SearchBar
          placeholder="Search Here..."
          lightTheme
          round
          value={this.state.searchValue}
          onChangeText={(text) => this.searchFunction(text)}
          autoCorrect={false}
        />
        <FlatList
          data = {this.state.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          />
          </View>
       
     //       <TouchableHighlight
    //        onPress={ () => navigate('ProgramPreviewScreen')} >
    //       <View style={{backgroundColor: 'white'}}>
    //         <View style = {styles.item}>
    //           <Text> {title} </Text>
    //         </View>
    //     </View>
    // </TouchableHighlight>
    
        //  keyExtractor={(item) => item.id}
        // />
        // <Button title="Select Program"
        // onPress={() => navigation.navigate('ProgramPreviewScreen')} /> 
        //}
     //  </View> */
    );
  }
  
}

export default ProgramScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 5,
  },
  item: {
    backgroundColor: "#627D98",
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 15,
  },
});

// function ProgramsScreen({ navigation }) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Button title="Select Program"
//         onPress={() => navigation.navigate('ProgramPreviewScreen')} />
//     </View>
//   );
// }

// export default ProgramsScreen;