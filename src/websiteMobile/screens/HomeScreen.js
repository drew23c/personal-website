import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

class HomeScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Welcome</Text>
                <Button title="Story"
                onPress={()=> this.props.navigation.navigate('Story')}
                />
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