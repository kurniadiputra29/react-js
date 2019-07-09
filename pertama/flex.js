import React, { Component } from 'react'; //seperti include, berasal dari node_moduls
import { View, Text, StyleSheet } from 'react-native';

export default class App extends Component {

  render(){
    return (
        <View style={styles.v1}>
          <Text>KAP</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
 v1:{
  flex: 1,
  backgroundColor: 'aqua',
  width: '100%',
 },
}); 
