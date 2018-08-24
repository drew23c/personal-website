import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Left, Right, Body } from 'native-base';
import {createStackNavigator, SafeAreaView, createMaterialTopTabNavigator } from 'react-navigation';
import {View, Text, StyleSheet, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import StoryScreen from './components/MyStory';
import SkillsScreen from './components/Skills';
import ProjectsScreen from './components/Projects';
import HomeScreen from './components/Home'



export default class App extends Component{
  render(){
    return <RouteStack/>
  }
}

const RouteStack = createMaterialTopTabNavigator({
  Home:{
    screen: HomeScreen,
    navigationOptions:{
      tabBarLabel:'Home',
      tabBarIcon:({tintColor}) =>(
        <Icon name="android-home" color={tintColor} size={24} />
      )
    }
  },
  MyStory:{
    screen: StoryScreen,
    navigationOptions:{
      tabBarLabel:'My Story',
      tabBarIcon:({tintColor}) =>(
        <Icon name="android-home" color={tintColor} size={24} />
      )
    }
  },
  Projects:{
    screen: ProjectsScreen,
    navigationOptions:{
      tabBarLabel:'Projects',
      tabBarIcon:({tintColor}) =>(
        <Icon name="android-home" color={tintColor} size={24} />
      )
    }
  },
  Skills:{
    screen: SkillsScreen,
    navigationOptions:{
      tabBarLabel:'Skills',
      tabBarIcon:({tintColor}) =>(
        <Icon name="android-home" color={tintColor} size={24} />
      )
    }
  }   
},{
  initialRouteName: 'Home',
  order:['Home', 'MyStory', 'Projects', 'Skills'],
  activeTintColor:'blue'
})

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})