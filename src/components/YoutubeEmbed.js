
import React, {Component} from "react";
import {hot} from "react-hot-loader";


class YoutubeEmbed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){
        return (
            <iframe id="video" width="420" height="315" src="//www.youtube.com/embed/9B7te184ZpQ?rel=0" frameborder="0" allowfullscreen></iframe>
        );
    }
}


export default hot(module)(YoutubeEmbed);





