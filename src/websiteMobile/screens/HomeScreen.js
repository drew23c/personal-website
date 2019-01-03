import React, {Component} from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Footer from '../components/Footer';
import backgroundImage from '../Image/code-coding-computer-574073.jpg'

class HomeScreen extends Component{
    static navigationOptions = {
        title:'Home'
    }
    render(){
        return(
                <ImageBackground source={backgroundImage} style={styles.container}>
                    <Text>Welcome</Text>
                    <Text>I'm a hungry full stack web developer looking for work.</Text>
                    <Footer/>
                </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      padding:26,
      marginTop:5,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width:'100%',
      height:'100%' 
    }
  })

export default HomeScreen;
