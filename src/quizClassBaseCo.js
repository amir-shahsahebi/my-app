import React from "react";
import ReactDOM from "react-dom";


class Clock extends React.Component {
    state = { time: new Date().toLocaleString() };
    componentDidMount() {
    setInterval(() => {
        this.setState({ time: new Date().toLocaleString() });
    }, 1000);
    }
    render() {
    console.log(this.state);
    return <div className="time">The time is: {this.state.time}</div>;
    }
}

ReactDOM.render(<Clock />, document.querySelector("#root"));

// it works whe we change name of the file to indez.js