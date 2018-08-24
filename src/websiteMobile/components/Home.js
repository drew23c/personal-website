import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation';


export default class HomeScreen extends Component{
    render(){
        return(
            <View>
                <Text onPress={()=>this.props.navigation.navigate('Home')}>Home Screen</Text>
                <Text onPress={()=>this.props.navigation.navigate('MyStory')}>My Story</Text>
                <Text onPress={()=>this.props.navigation.navigate('Projects')}>Projects</Text>
                <Text onPress={()=>this.props.navigation.navigate('Skills')}>Skills</Text>
            </View>
        )
    }
}