import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import backgroundImage from '../Image/code-coding-computer-574073.jpg'
import Footer from '../components/Footer';

class StoryScreen extends Component{
    static navigationOptions = {
        title: 'About'
    }
    render(){
        return(
            <ImageBackground source={backgroundImage} style={styles.container}>
                <Text>
                    This has undoubtedly been the most exciting time for me as someone 
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
                <Footer/>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      padding:26,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:5,
      width:'100%',
      height:'100%'
    }
  })

export default StoryScreen;