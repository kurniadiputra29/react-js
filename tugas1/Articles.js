import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render(){
    return (
      <View style={styles.articles}>
      <Text style={styles.text}>
        {this.props.article}
      </Text>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  articles:{
    flex: 5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    width: '100%',
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  }
});
