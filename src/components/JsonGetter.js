
import React, {Component} from "react";
import {hot} from "react-hot-loader";

class Jgetter extends React.Component {
  constructor(props) {
    super(props);
    //this.state.fdata = {};
  }


  gogetit() {

    var request = new XMLHttpRequest();
    request.open('GET', '/data/fruit.json', true);

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            var data = JSON.parse(request.responseText);
            console.log(data);
        } else {
            // We reached our target server, but it returned an error

        }
    };

    request.onerror = function() {
    // There was a connection error of some sort
    };

    request.send();

    return "ding";
  }

  componentDidMount() {
        const ff = this.gogetit();
        console.log("SHOULD HAVE FIRED");
    }

  render() {
    return (
    <div>
        Data GOT
    </div>
    );
  }
}


export default hot(module)(Jgetter);

