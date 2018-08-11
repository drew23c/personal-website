import React, {Component} from 'react';
import chatter from '../videos/chatterbox.webm';
import {Modal} from 'react-bootstrap';
import './styles/projects.css';


class Projects extends Component{
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
            <div className="projects">
            <ul>
                <li><Modal.Dialog>
                    <Modal.Body>
                    {this.projects.map(project =>
                    <div>
                    <h3>{project.title}</h3>
                    <p className="project-description"><b>{project.description}</b></p>
                    <a href={project.link} target="_blank"><video width="400px" height="200px" autoPlay control loop >
                        <source src={project.source} />
                    </video></a>
                    </div>)}
                    </Modal.Body>
                </Modal.Dialog></li>
            </ul>
            </div>
        )
    }
}
export default Projects;