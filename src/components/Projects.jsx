import React, {Component} from 'react';
import chatter from '../videos/chatterbox.webm';
import tatrucking4junk from '../videos/tatrucking4junk.webm';
import nycGreenthumb from '../videos/nyc-greenthumb.webm';
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
            },
            {
                "title":'TA Trucking 4 Junk',
                "description":`We buy junk cars for cash in the entire New York 
                area. Sell your used or unwanted cars, trucks, SUVs, or vans and 
                get paid on the spot. We don't just buy junk vehicles! We buy ANY 
                condition vehicle with or without a title or keys.`,
                "link":"https://www.tatrucking4junk.com",
                "source":tatrucking4junk
            },
            {
                "title":'NYC Greenthumb',
                "description":`NYC has transformed vacant land into vibrant civic 
                spaces that brings communities together. To find a community garden 
                near you or explore other gardens in NYC please search through a list 
                of 100 gardens.`,
                "link":'https://safe-forest-76658.herokuapp.com/',
                "source":nycGreenthumb
            }
        ]
    }
    componentDidMount(){
        
    }
    render(){
        return(
            <div className="projects">
                <ul>
                {this.projects.map(project =><div>
                        <h3>{project.title}</h3>
                        <p className="project-description"><b>{project.description}</b></p>
                        <a href={project.link} target="_blank"><video width="400px" height="200px" autoPlay control loop >
                            <source src={project.source} />
                        </video></a>
                    </div>)}
                </ul>
            </div>
        )
    }
}
export default Projects;