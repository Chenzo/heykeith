

import React, {Component} from "react";
import {hot} from "react-hot-loader";
import "./Youtube.scss";
import YoutubeEmbed from "./YoutubeEmbed.js";


class Youtube extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vidEmbed: <div></div>
        };
        this.vidClick = this.vidClick.bind(this);
        
    }


    componentDidMount() {
        
    }


    vidClick() {
        const vidID = this.props.videodata.id;
        this.setState({
            vidEmbed: <YoutubeEmbed vidID={vidID}/>
        });
    }


    render(){
        const vData = this.props.videodata;
        const bgstyle = {
            backgroundImage:'url("http://img.youtube.com/vi/'+ vData.id + '/0.jpg")',
            backgroundPosition: 'center'
        };

        return (
            <div className="youtube_vid" onClick={this.vidClick}>
                <h5>YouTube {vData.title}</h5>
                <div className="video_holder">
                    <div className="ytplayer">{this.state.vidEmbed}</div>
                    <div className="bgimage"  style={bgstyle}></div>
                </div>
            </div>
        );
    }

}


export default hot(module)(Youtube);