import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component{
  render(){
    return(
      <View style={styles.container}>
      <Text>Project Alsos</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    alignSelf: 'stretch',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
