/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  NavigatorIOS
} from 'react-native';
import Home from './app/home.page.js';
import User from './app/user.page.js';

export default class PRJ_P2P extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab:'home',
    }
  }
  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title='首页'
          selected={this.state.selectedTab == 'home'}
          onPress = {()=>{
            this.setState({
              selectedTab:'home',
            })
          }}>
          <NavigatorIOS
            initialRoute={{
              component: Home,
              title: '首页',
            }}
            style={{flex: 1}}
            />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='个人中心'
          selected={this.state.selectedTab == 'user'}
          onPress = {()=>{
            this.setState({
              selectedTab:'user',
            })
          }}>
          <NavigatorIOS
            initialRoute={{
              component: User,
              title: '个人中心',
            }}
            style={{flex: 1}}
            />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('PRJ_P2P', () => PRJ_P2P);
