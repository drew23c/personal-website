import React, {Component} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import StoryScreen from './screens/StoryScreen';
import HomeScreen from './screens/HomeScreen';
import SkillsScreen from './screens/SkillsScreen';

export default class App extends Component{
  render(){
    return(
      <AppNavigator/>
    )
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Story: StoryScreen,
    Skills: SkillsScreen
  },
  { 
    defaultNavigationOptions:{
      headerTitleStyle:{
        fontWeight:'bold'
      },
      headerTintColor:'blue'
    }
  }
)