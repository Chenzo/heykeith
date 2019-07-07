

import React, {Component} from "react";
import {hot} from "react-hot-loader";


class Youtube extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    componentDidMount() {
            
    }

    render(){
        return (
            <div className="youtube_vid">YouTube Vid here</div>
        );
    }

}


export default hot(module)(Youtube);