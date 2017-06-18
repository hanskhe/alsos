import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TextContent extends React.Component{
  render(){
    return(
      <View style={styles.container}>
      <Text>Welcome to Project Alsos. You will find all information you need here.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    margin: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
