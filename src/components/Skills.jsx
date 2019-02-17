import React, {Component} from 'react';
import './styles/skills.css';
import html5 from '../icons/if_html5_245995.png';
import css3 from '../icons/if_icon_287_226925.png';
import js from '../icons/if_code-programming-javascript-software-develop-command-language_652581.png';
import react from '../icons/if_react_1296845.png';
import postgres from '../icons/icons8-postgresql-128.png';
import node from '../icons/if_node_3069651.png';
import git from '../icons/if_git-square_1608905.png';
import ubuntu from '../icons/if_Ubuntu_367643.png';
import reactNative from '../icons/reactNative.png';

class Skills extends Component{
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
                "title":'Git',
                "source": git,
            },
            {
                "title":'Linux',
                "source": ubuntu,
            },
            {
                "title":'React Native',
                "source": reactNative
            }
        ]
    }

    render(){
        return(
            <div className="skills">
                <ul className="skills-list">
                {this.skills.map(skill =>
                <li>
                    <img src={skill.source} alt={skill.title}/>
                    <p className="title">{skill.title}</p>
                </li>
                )}
                </ul>
            </div>
        )
    }
}
export default Skills;