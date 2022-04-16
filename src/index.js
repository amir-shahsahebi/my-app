// import the react and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

function getButtonText() {
    return 'Click on me!'
}
// Create a react component
const App = () => {
    const buttonText = {text: "click me"}
    const style = { backgroundColor: 'red', color: 'white' }
  return (
    <div>
      <label className="label" for="name">
        Enter Name
      </label>
      <input id="name" type="text" />
      {/* <button style="background-color: red; color:white">Submit</button> */}
      <button style={style}>{buttonText.text}</button>
    </div>
  );
};

// take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
