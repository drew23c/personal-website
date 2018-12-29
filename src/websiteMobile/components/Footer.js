import React, {Component} from 'react';
import {View, Text, Image, Linking, StyleSheet, TouchableWithoutFeedback, WebView} from 'react-native';
import email from '../icons/envelope.png';
import github from '../icons/github-logo.png';
import linkedin from '../icons/linkedin-logo.png';
import resume from '../components/file/Andrew Caldwell electronic.pdf'
import resumeIcon from '../icons/resume.png'
// import Pdf from 'react-native-pdf';

class Footer extends Component{
    render(){
        let resume = require('./file/Andrew Caldwell electronic.pdf')
        return(
            <View>
                <TouchableWithoutFeedback onPress={()=> Linking.openURL("mailto:drewecaldwell@gmail.com")}><Image source={email} style={{height:30, width:30}} /></TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=> Linking.openURL("http://www.github.com/drew23c")}><Image source={github} style={{height:30, width:30}} /></TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=> Linking.openURL("http://www.linkedin.com/in/caldwellandrew")}><Image source={linkedin} style={{height:30, width:30}} /></TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=> Linking.open('./file/Andrew Caldwell electronic.pdf')}><Image source={resumeIcon} style={{height:30, width:30}} /></TouchableWithoutFeedback>
            </View>
        )
    }
}
export default Footer;