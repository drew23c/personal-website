import React, { Component } from 'react';
import { AppRegistry, Container, Header, Title, Content, Footer, FooterTab, Left, Right, Body, Icon } from 'native-base';
import {View, Text, StyleSheet, SectionList, Button} from 'react-native';
import {createStackNavigator} from 'react-navigation';


export default class ProjectsScreen extends Component{
    render(){
        return(
            <View>
                <SectionList
                    sections={[
                        {title:'ChatterBox', 
                    data:[`From the die-hard fanatics to the merely outspoken, 
                    ChatterBox is the central haven for all those passionate 
                    bout great television. Enter a live chat designated for 
                    your favorite television shows - as they’re airing - and 
                    free to speak your mind with other outspoken fans from all 
                    over the country! Don’t get lost in the fray with other 
                    social media sites. ChatterBox is designed to prioritize your 
                    interests and allows you the space to speak your mind.`]},
                    ]}
                    renderItem={(item) => <Text>{item}</Text>}
                    renderSectionHeader={(section) => 
                        <Text>
                            {section.title}
                        </Text>}
                    keyExtractor={(item, index) => index}
                />  
            </View>
        )
    }
}