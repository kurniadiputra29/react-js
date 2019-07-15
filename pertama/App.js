import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './home';
import Detail from './detail';

const AppNavigator = createStackNavigator({
  Home:{
    screen: Home,
    navigationOptions:{
      title: 'Home',
      headerStyle:{
        backgroundColor: '#f0f',
      }
    }
  },
  Detail:{
    screen: Detail,
    navigationOptions:{
      title: 'Detail',
      headerStyle:{
        backgroundColor: '#f30',
      }
    }
  },
});

export default createAppContainer(AppNavigator);