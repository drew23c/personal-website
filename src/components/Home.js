import React, {Component} from 'react';
import './styles/home.css';

export default class Home extends Component{
    constructor(){
        super()
        this.updates = [
            {
                date:"03/19/2019",
                update:`Accepted a position as a Production Control Technician on 
                the Database team at 1199SEIU.`
            },
            {
                date:"03/19/2019",
                update:`Commissioned to help Grace Moravian Church in Springfield 
                Gardens, NY redesign their website.`
            }
        ]
    }
    render(){
        return(
            <div className="home">
                <h2>{`I'm a passionate technologist constantly learning to become better as a technician and a developer.`}</h2>
                <ul className="update">
                    <h2>Update</h2>
                    {this.updates.map(u =><li><b>{u.date}</b><br/><p>{u.update}</p></li>)}
                </ul>
            </div>
        )
    }
}