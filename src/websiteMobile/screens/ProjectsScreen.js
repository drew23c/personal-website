import React, {Component} from 'react';
import {View, Text} from 'react-native';
import chatter from '../videos/chatterbox.webm';
import Video from 'react-native-video';

class ProjectsScreen extends Component{
    static navigationOptions = {
        title:'Projects'
    }
    constructor(){
        super()
        this.projects =[
            {
                "title":'ChatterBox',
                "description":`From the die-hard fanatics to the merely outspoken, 
                ChatterBox is the central haven for all those passionate 
                bout great television. Enter a live chat designated for 
                your favorite television shows - as they’re airing - and 
                free to speak your mind with other outspoken fans from all 
                over the country! Don’t get lost in the fray with other 
                social media sites. ChatterBox is designed to prioritize your 
                interests and allows you the space to speak your mind.`,
                "link":"https://sleepy-crag-37202.herokuapp.com/",
                "source":chatter
            }
        ]
    }
    render(){
        return(
            <View>
                <Video source={{uri: chatter}} />
            </View>
        )
    }
}
export default ProjectsScreen;