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
  Image,
  ScrollView
} from 'react-native';

export default class AwesomeProject extends Component {
  render() {
    let pic1 = {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    let pic2 = {
    uri: 'https://s-media-cache-ak0.pinimg.com/originals/37/e1/4f/37e14f98afb2d474642f7795e03eac2b.jpg'
    };
    return (
      <ScrollView>
      <View style={styles.container}>
      <Image source={pic1} style={{width: 193, height: 110}}/>
      <Image source={pic2} style={{width: 193, height: 110}}/>
      <View style={{width: 250, height: 50, backgroundColor: 'powderblue'}} />
      <View style={{width: 250, height: 50, backgroundColor: 'skyblue'}} />
      <View style={{width: 250, height: 50, backgroundColor: 'black'}} />
        <Text style={styles.welcome}>
          Welcome to Indianapolis!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2987A3',
    height: 1000,
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
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
