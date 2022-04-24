import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };
  // instead of constructor function, we use "componentDidMount ()" 
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  // we need to have a helper function because in render() if we have several condition, we will face to a challenge and we use a helper method to grab final data from several conditions
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
  
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>
    }
  
    return <Spinner message="Please accept location request" />;
  }

  // React says we have to define render!!
  render() {
    return (
    <div className="border red">
      {this.renderContent()}
    </div>
    )
  }
}
    
    ReactDOM.render(<App />, document.querySelector("#root"));
    