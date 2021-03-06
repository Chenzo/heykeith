
import React, {Component} from "react";
import {hot} from "react-hot-loader";
import "./YoutubeEmbed.scss";

class YoutubeEmbed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){
        const vidID = this.props.vidID;
        return (
            <div className="youtubeResponsive">
                <iframe width="100%" 
                height="100%" 
                src={"https://www.youtube.com/embed/"+ vidID + "?rel=0;&autoplay=1" }
                frameBorder="0" 
                allowFullScreen 
                allow="autoplay; fullscreen">
                </iframe>
            </div>
        );
    }
}


export default hot(module)(YoutubeEmbed);





