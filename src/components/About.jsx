import React, {Component} from 'react';
import './styles/about.css';

class About extends Component{

    render(){
        return(
            <div className="about">
                <p className="about-pitch"><b>{`This has undoubtedly been the most exciting time for me as someone 
                who loves technology. Working as tech support, I wanted to 
                do something more then entry level work but I became complacent. It wasn't until a motivating conversation with my
                 co-worker that pushed us both to become better in the tech industry. 
                 Find something I'm passionate about. 
                 So through reading and tinkering with various fields in tech, I fell in 
                 love with programming. From the moment I created a “Hello World” page, 
                 I was immersed in this world of designing web pages from scratch. That's 
                 when I knew that this is the career path I want to follow. Since then, 
                 my hunger to learn has never wavered.`}</b></p>
            </div>
        )
    }
}
export default About;