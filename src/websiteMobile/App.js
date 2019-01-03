import React, {Component} from 'react'
import {createBottomTabNavigator} from 'react-navigation';
import StoryScreen from './screens/StoryScreen';
import HomeScreen from './screens/HomeScreen';
import SkillsScreen from './screens/SkillsScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import resume from './components/file/Andrew Caldwell electronic.pdf'

export default class App extends Component{
  render(){
    return(
      <AppNavigator/>
    )
  }
}

const AppNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Story: StoryScreen,
    Skills: SkillsScreen,
    Projects: ProjectsScreen
  }
)