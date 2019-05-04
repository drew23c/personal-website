import React, {Component} from 'react';
import './styles/skills.css';
import html5 from '../icons/if_html5_245995.png';
import css3 from '../icons/if_icon_287_226925.png';
import js from '../icons/if_code-programming-javascript-software-develop-command-language_652581.png';
import react from '../icons/if_react_1296845.png';
import postgres from '../icons/icons8-postgresql-128.png';
import node from '../icons/if_node_3069651.png';
import git from '../icons/Git-Icon-1788C.png';
import ubuntu from '../icons/220px-Tux.png';
import reactNative from '../icons/reactNative.png';
import powershell from '../icons/powershell.png';
import wordpress from '../icons/1-2-wordpress-logo-png-file.png'

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
                "title":'Powershell',
                "source": powershell
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
            },
            {
                "title":'WordPress',
                "source": wordpress
            }
        ]
    }

    render(){
        return(
            <div className="skills" id="skills">
            <h1>Skills</h1>
                <ul className="skills-list">
                {this.skills.map(skill =>
                <li>
                    <img src={skill.source} alt={skill.title} />
                    <h3 className="title">{skill.title}</h3>
                </li>
                )}
                </ul>
            </div>
        )
    }
}
export default Skills;