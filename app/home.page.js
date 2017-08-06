'use strict';

import React, {Component} from 'react';
import {TextInput,TouchableHighlight,StyleSheet,ListView, Text, View} from 'react-native';
// import Navbar from '../common/navbar.js';
import corps from './DB/corps.json';

class Home extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: this.ds.cloneWithRows([]),
      corps:require('./DB/corps.json'),
    };
  }
  componentDidMount(){
    this.setState({
      dataSource:this.ds.cloneWithRows(this.state.corps)
    })
  }
  _onRowPressed(data){

  }
  renderRow(rowData, sectionID, rowID) {
    return (
      <TouchableHighlight onPress={ () => this._onRowPressed(rowData) }
        underlayColor='gray'>
        <View style={styles.cell}>
          <Text style={styles.text}>{rowData.platName}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          style={styles.ListView}
          contentOffset={{x: 0, y: 0}}
          enableEmptySections={true}
          contentInset={{top: 0, left: 0, bottom: 0, right: 0}}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  ListView: {
    zIndex: 0,
    flex: 1,
  },
  cell: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 16,
    fontSize: 17,
  },
  input:{
    zIndex: 1,
    paddingLeft: 16,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor:'white'
  }
})

module.exports = Home;
