

import React, {Component} from "react";
import {hot} from "react-hot-loader";


class Youtube extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    componentDidMount() {
        // Replace the 'ytplayer' element with an <iframe> and
        // YouTube player after the API code downloads.
        
    }

    render(){
        const vData = this.props.videodata;
        console.log(vData);
        return (
            <div className="youtube_vid"><h5>YouTube {vData.title}</h5>
            <img className="thumbnail" src={"https://img.youtube.com/vi/" + vData.id + "/0.jpg"} />
            <div id="ytplayer"></div>
            </div>
        );
    }

}
var player;
        function onYouTubePlayerAPIReady() {
            console.log("here?");
            player = new YT.Player('ytplayer', {
                height: '360',
                width: '640',
                videoId: 'M7lc1UVf-VE'
            });
        }

export default hot(module)(Youtube);