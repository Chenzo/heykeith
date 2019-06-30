import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import Learn from "./Learn.js";
import Toggle from "./Toggle.js";
import TheImage from "./components/TheImage.js";

ReactDOM.render(<App />, document.getElementById("root"));


const name = 'VINCE!!';
const element = <h2 tabIndex="0" className="titlename">Hello, {name}</h2>;

ReactDOM.render(
  element,
  document.getElementById('learn')
);



function tick() {
    const element = (
      <div>
      <h2 tabIndex="0" className="titlename">Hello, {name}</h2>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('learn'));
  }
  setInterval(tick, 1000);





const elementer = <Learn name="VINCE" />;
ReactDOM.render(elementer, document.getElementById('learn2'));



function Vinchenzo() {
  return (
    <div>
      <Learn name="VINCE" />
      <Learn name="Chenzo" />
     </div>
  );
}

ReactDOM.render(<Vinchenzo />, document.getElementById('learn2'));




ReactDOM.render(
  <Toggle />,
  document.getElementById('learn3')
);



ReactDOM.render(
  <TheImage/>,
  document.getElementById('learn4')
);

