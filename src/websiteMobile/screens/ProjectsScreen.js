import React, {Component} from 'react';
import {View, Text, TouchableWithoutFeedback, Linking, StyleSheet, ImageBackground} from 'react-native';
import chatter from '../videos/chatterbox.webm';
import {Video} from 'expo';
import backgroundImage from '../Image/code-coding-computer-574073.jpg';
import Footer from '../components/Footer';

class ProjectsScreen extends Component{
    static navigationOptions = {
        title:'Projects'
    }
    constructor(){
        super()
        this.projects =[
            {
                "title":'ChatterBox',
                "description":`From the die-hard fanatics to the merely outspoken, ChatterBox is the central haven for all those passionate bout great television. Enter a live chat designated for your favorite television shows - as they’re airing - and free to speak your mind with other outspoken fans from all over the country! Don’t get lost in the fray with other social media sites. ChatterBox is designed to prioritize your interests and allows you the space to speak your mind.`,
                "link":"https://sleepy-crag-37202.herokuapp.com/",
                "source":chatter
            }
        ]
    }
    render(){
        return(
            <ImageBackground source={backgroundImage} style={styles.container}>
                {this.projects.map(p=><View>
                    <Text style={{fontWeight:'bold', textAlign:'center'}}>{p.title}</Text>
                    <Text>{p.description}</Text>
                    <TouchableWithoutFeedback onPress={()=> Linking.openURL(p.link)}>
                    <Video source={p.source} 
                    resizeMode="cover"
                    style={{width:300, height:300}}
                    shouldPlay
                    isLooping
                    />
                    </TouchableWithoutFeedback>
                </View>)}
                <View style={styles.footerContainer} >
                        <Footer/>
                </View>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginLeft:2,
        marginRight:2,
        marginTop:20,
        height:'100%',
        width:'100%'
    },
    footerContainer:{
        flex:1,
        alignItems:'center',
    }
})
export default ProjectsScreen;