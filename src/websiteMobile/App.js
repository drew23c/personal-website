import React, {Component} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import StoryScreen from './screens/StoryScreen';
import HomeScreen from './screens/HomeScreen';

class App extends Component{
  render(){
    return(
      <AppNavigator/>
    )
  }
}

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Story: StoryScreen
})



export default App;