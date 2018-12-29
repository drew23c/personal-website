import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Footer from '../components/Footer';


class HomeScreen extends Component{
    static navigationOptions = {
        title:'Home'
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>Welcome</Text>
                <Text>I'm a hungry full stack web developer looking for work.</Text>
                <Button title="Story"
                onPress={()=> this.props.navigation.navigate('Story')}
                />
                <Button title="Skills"
                onPress={()=> this.props.navigation.navigate('Skills')}
                />
                <Button title="Projects"
                onPress={()=> this.props.navigation.navigate('Projects')}
                />
                <Footer/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      padding:26,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    }
  })

export default HomeScreen;
