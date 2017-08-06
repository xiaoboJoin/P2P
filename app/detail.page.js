'use strict';

import React, {Component} from 'react';
import {TextInput,TouchableHighlight,StyleSheet,ListView, Text, View} from 'react-native';
// import Navbar from '../common/navbar.js';

class Detail extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){

  }

  render() {
    return (
      <View style={styles.container}>
      
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

module.exports = Detail;
