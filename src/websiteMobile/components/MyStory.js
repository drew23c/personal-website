import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import {View, Text, StyleSheet} from 'react-native';


export default class StoryScreen extends Component{
    render(){
        return(
            <View style={styles.storyStyle}>
                <View style={{flex:2}}>
                    <Text style={styles.titleSize}>My Story</Text>
                    <Text style={styles.margin}>This has undoubtedly been the most exciting time for me as someone 
                        who loves technology. Working as tech support, I wanted to 
                        do something more then entry level work but I became complacent. It wasn't until a motivating conversation with my
                        co-worker that pushed us both to become better in the tech industry. 
                        Find something I'm passionate about. 
                        So through reading and tinkering with various fields in tech, I fell in 
                        love with programming. From the moment I created a “Hello World” page, 
                        I was immersed in this world of designing web pages from scratch. That's 
                        when I knew that this is the career path I want to follow. Since then, 
                        my hunger to learn has never wavered.
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    storyStyle:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    titleSize:{
        fontSize:30,
        textAlign:'center'
    },
    margin:{
        marginLeft:10
    }
})