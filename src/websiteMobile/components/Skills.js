import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation';


export default class SkillsScreen extends Component{
    render(){
        return(
            <View>
                <Text>These are my skills</Text>
            </View>
        )
    }
}