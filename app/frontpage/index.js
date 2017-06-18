import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../shared/header.js';
import TextContent from './textcontent.js';
import RegistryList from './registrylist.js';

export default class FrontPage extends React.Component{


  render(){
    return(
      <View style={styles.container}>
      <Header />
      <TextContent />
      <RegistryList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
