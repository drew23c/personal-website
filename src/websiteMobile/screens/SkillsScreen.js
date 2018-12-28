import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import html5 from '../icons/if_html5_245995.png';
import css3 from '../icons/if_icon_287_226925.png';
import js from '../icons/if_code-programming-javascript-software-develop-command-language_652581.png';
import react from '../icons/if_react_1296845.png';
import postgres from '../icons/icons8-postgresql-128.png';
import node from '../icons/if_node_3069651.png';
import git from '../icons/if_git-square_1608905.png';
import ubuntu from '../icons/if_Ubuntu_367643.png';
import graphql from '../icons/GraphQL.png';
import {List} from 'react-native-elements';


class SkillsScreen extends Component{
    static navigationOptions = {
        title: 'Skills'
    }
    constructor(){
        super()
        this.skills = [
            {
                "title":'HTML5',
                "source": html5,
            },
            {
                "title":'CSS3',
                "source": css3,
            },
            {
                "title":'JavaScript',
                "source": js,
            },
            {
                "title":'NodeJS',
                "source": node,
            },
            {
                "title":'React',
                "source": react,
            },
            {
                "title":'PostgreSQL',
                "source": postgres,
            },
            {
                "title":'GraphQL',
                "source": graphql
            },
            {
                "title":'Git',
                "source": git,
            },
            {
                "title":'Linux',
                "source": ubuntu,
            },
        ]
    }
    render(){
        return(
            <View style={styles.container}>
                <List>
                    <ScrollView>
                        {
                            this.skills.map(s=>
                                <View style={styles.listContainer}>
                                    <Text style={{fontWeight:'bold'}}>{s.title}</Text>
                                    <Image source={s.source} />
                                </View>    
                            )
                        }
                    </ScrollView>
                </List>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start'
    },
    listContainer:{
        fontWeight:'bold',
        alignItems:'center'
    }
})
export default SkillsScreen;