import React, { Component } from 'react'; //seperti include, berasal dari node_moduls
import { View, Text, StyleSheet} from 'react-native';
import {Icon} from 'native-base';
import {TabNavigator} from 'react-navigation';

export default class ProfilTab extends Component {

  render(){
    return (
      <View style={styles.container}>
      	<Text>ProfilTab</Text>
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