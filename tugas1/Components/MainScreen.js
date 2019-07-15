import React, { Component } from 'react'; //seperti include, berasal dari node_moduls
import { View, Text, StyleSheet, Button} from 'react-native';
import {Icon} from 'native-base';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {TabNavigator} from 'react-navigation';
import HomeTab from './AppTabNavigator/HomeTab';
import SearchTab from './AppTabNavigator/SearchTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import LikesTab from './AppTabNavigator/LikesTab';
import ProfilTab from './AppTabNavigator/ProfilTab';

export default class MainScreen extends Component {
	static navigationOptions ={
		headerLeft: <Icon style={{paddingLeft: 10}} name="ios-camera"/>,
		title: "Instagram",
		headerRight: <Icon style={{paddingRight: 10}} name="ios-send"/>,
	}

  render(){
    return (
      <View style={styles.container}>
      	<Text>MainScreen</Text>
              <Icon name='ios-home' style={{color: 'black'}}/>
              <Icon name='ios-search' style={{color: 'black'}}/>
              <Icon name='ios-add-circle' style={{color: 'black'}}/>
              <Icon name='heart-empty' style={{color: 'black'}}/>
              <Icon name='person' style={{color: 'black'}}/>
      </View>
    );
  }
};


const styles = StyleSheet.create({
	container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 

