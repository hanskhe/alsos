import React from 'react';
import { StyleSheet, Text, ListView } from 'react-native';
import ListItem from './listitem.js';

export default class RegistryList extends React.Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    ssrdata = [
      {
        "ISIN": "NO0010716582",
        "Name": "Aker Solutions ASA",
        "ShortPercent": 0.59,
        "ShortedSum": 1615961.0,
        "LastChange": "2017-06-15T00:00:00",
        "NumPositions": 9,
      }];
      this.state = {
        dataSource : ds.cloneWithRows(ssrdata)
      }
    }

    componentDidMount(){
      var that = this;
      fetch('https://ssr.finanstilsynet.no/api/Issuers?extension=json')
      .then(function(response) {
        return response.json();
      })
      .then(function(j){
        that.setState({
          dataSource: that.state.dataSource.cloneWithRows(j)
        });
        console.log("fetch");
      })
      .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
        // ADD THIS THROW error
        throw error;
      }
    )
  }


  render() {
    return (
      <ListView contentContainerStyle={styles.container}
      dataSource={this.state.dataSource}
      renderRow={(rowData) => <ListItem name = {rowData.Name} percent = {rowData.ShortPercent}/>}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
