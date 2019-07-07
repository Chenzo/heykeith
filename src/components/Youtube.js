

import React, {Component} from "react";
import {hot} from "react-hot-loader";
import "./Youtube.scss";


class Youtube extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.vidClick = this.vidClick.bind(this);
        
    }


    componentDidMount() {
        // Replace the 'ytplayer' element with an <iframe> and
        // YouTube player after the API code downloads.
        
    }


    vidClick() {
        const vidID = this.props.videodata.id;
        console.log("load this video here: " + vidID);

        var player;
        player = new YT.Player("ytplayer_" + vidID, {
            height: '360',
            width: '640',
            videoId: vidID,
            autoplay: 1
        });
    }


    render(){
        const vData = this.props.videodata;
        const bgstyle = {
            backgroundImage:'url("http://img.youtube.com/vi/'+ vData.id + '/0.jpg")',
            backgroundPosition: 'center'
        };
        console.log(vData);
        return (
            <div className="youtube_vid" onClick={this.vidClick}><h5>YouTube {vData.title}</h5>
            <div className="video_holder">
                <div className="ytplayer"><div id={"ytplayer_" + vData.id}></div></div>
                <div className="bgimage"  style={bgstyle}></div>
            </div>
            
            </div>
        );
    }

}


export default hot(module)(Youtube);