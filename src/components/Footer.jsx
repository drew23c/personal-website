import React, {Component} from 'react';
import './styles/footer.css';
import email from '../icons/envelope.png';
import github from '../icons/github-logo.png';
import linkedin from '../icons/linkedin-logo.png';

class Footer extends Component{

    render(){
        return(
            <div className="footer">
                <nav className="footer-nav">
                    <a href="mailto:drewecaldwell@gmail.com"><img src={email} alt="email" /></a>
                    <a href="http://www.github.com/drew23c" target="_blank"><img src={github} alt="github" /></a>
                    <a href="http://www.linkedin.com/in/caldwellandrew" target="_blank"><img src={linkedin} alt="linkedin" /></a>
                </nav>
            </div>
        )
    }
}
export default Footer;