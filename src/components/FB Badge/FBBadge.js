import React, {Component} from 'react';
import './fbbadge.css';

export default class FBBadge extends Component{

    render(){
        return(
            <div className="fb-badge">
                <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fbluecanvascreative%2F&width=450&layout=standard&action=like&size=large&show_faces=true&share=true&height=80&appId" width="450" height="80" style={{border:'none',overflow:'hidden'}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
            </div>
        )
    }
}