import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Left, Right, Body, Icon } from 'native-base';
import {View, Text, StyleSheet, Button} from 'react-native';


export default class HomeScreen extends Component{
    static navigationOptions = {
        header: null
    }
    render(){
        return(
            <View style={styles.container}>
                <Button 
                    title="Go to my story"
                    onPress={() => this.props.navigation.navigate('MyStory')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    }
})