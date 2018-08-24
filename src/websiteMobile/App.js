import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import {createStackNavigator} from 'react-navigation';
import {View, Text, StyleSheet} from 'react-native';
// import MyStory from './components/MyStory';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import HomeScreen from './components/Home'

// const RootStack = createStackNavigator({
//   Home:HomeScreen,
//   MyStory:MyStory,
//   Projects:Projects,
//   Skills:Skills
// },{
//   initialRouteName:'Home'
// })

export default class App extends Component{
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }
  render(){
    return(
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
            This is Home
          </Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}