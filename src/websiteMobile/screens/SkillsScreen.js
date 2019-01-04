import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, ScrollView, ImageBackground} from 'react-native';
import html5 from '../icons/if_html5_245995.png';
import css3 from '../icons/if_icon_287_226925.png';
import js from '../icons/if_code-programming-javascript-software-develop-command-language_652581.png';
import react from '../icons/if_react_1296845.png';
import postgres from '../icons/icons8-postgresql-128.png';
import node from '../icons/if_node_3069651.png';
import git from '../icons/if_git-square_1608905.png';
import ubuntu from '../icons/if_Ubuntu_367643.png';
import graphql from '../icons/graphql.jpeg';
import {List} from 'react-native-elements';
import backgroundImage from '../Image/code-coding-computer-574073.jpg'
import Footer from '../components/Footer';

class SkillsScreen extends Component{
    static navigationOptions = {
        title: 'Skills'
    }
    constructor(){
        super()
        this.skills = [
            {
                "key":1,
                "title":'HTML5',
                "source": html5,
            },
            {
                "key":2,
                "title":'CSS3',
                "source": css3,
            },
            {
                "key":3,
                "title":'JavaScript',
                "source": js,
            },
            {
                "key":4,
                "title":'NodeJS',
                "source": node,
            },
            {
                "key":5,
                "title":'React',
                "source": react,
            },
            {
                "key":6,
                "title":'PostgreSQL',
                "source": postgres,
            },
            {
                "key":7,
                "title":'GraphQL',
                "source": graphql
            },
            {
                "key":8,
                "title":'Git',
                "source": git,
            },
            {
                "key":9,
                "title":'Linux',
                "source": ubuntu,
            },
        ]
    }
    render(){
        return(
            <ImageBackground source={backgroundImage} style={styles.container}>
                <List>
                    <ScrollView>
                        {
                            this.skills.map(s=>
                                <View style={styles.listContainer} key={s.key}>
                                    <Text style={{fontWeight:'bold'}}>{s.title}</Text>
                                    <Image source={s.source} style={{height:80, width:80}} />
                                </View>    
                            )
                        }
                    <View style={styles.footerContainer} >
                        <Footer/>
                    </View>
                    </ScrollView>
                </List>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        height:'100%',
        width:'100%'
    },
    listContainer:{
        alignItems:'center'
    },
    footerContainer:{
        flex:1,
        alignItems:'center',
    }
})
export default SkillsScreen;