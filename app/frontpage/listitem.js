import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ListItem extends React.Component{

  // componentWillReceiveProps(nextProps){
  //     console.log("registryList will receive props");
  //     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  //     this.setState = {
  //       ssrdata : nextProps,
  //       dataSource : ds.cloneWithRows(nextProps)
  //     }
  //   }


  render(){
    return(
      <View style={styles.container}>
      <Text>{this.props.name} - {this.props.percent}%</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    borderColor: 'black',
    borderWidth: 1,
    alignSelf: 'stretch',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
