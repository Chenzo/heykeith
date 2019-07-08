
import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.scss";
import Youtube from "./components/Youtube.js";

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      uData: [],
      gotData: false
    };
  }


  componentDidMount() {
            
    var request = new XMLHttpRequest();
    var me = this;
    request.open('GET', '/data/videos.json', true);

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            me.setState({
                uData: data.videos,
                gotData: true
            });
            console.log("data got!");
        } else {
            // We reached our target server, but it returned an error

        }
    };

    request.onerror = function() {
    // There was a connection error of some sort
    };

    request.send();
    console.log("requesting data...");
  }


  render(){
    if(this.state.gotData) {

      const vids = this.state.uData.map((videos, index) =>
        <Youtube key={index} videodata={videos}/>
      );

      return(
        <div className="App">
          <h1>Hey Keith...</h1>        

          <div className="video_list">
            {vids}
          </div>

        </div>
      );
    } else {
      return (
          <div className="jsonGetter">Loading...</div>
      );
    }
  }
}

export default hot(module)(App);