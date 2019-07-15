import React ,{Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import MainScreen from './Components/MainScreen';
import { View, Text, StyleSheet} from 'react-native';

const AppNavigator = createStackNavigator({
  MainScreen:{
    screen: MainScreen
  },
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default createAppContainer(AppNavigator);

