import React from "react";
import ReactDOM from "react-dom";
import faker from "@faker-js/faker";

const App = () => {
  return (
    <div className="ui container comments">
      <din className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 8:00AM</span>
          </div>
          <div className="text">Good post</div>
        </div>
      </din>
      <din className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 8:00AM</span>
          </div>
          <div className="text">Good post</div>
        </div>
      </din>
      <din className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 8:00AM</span>
          </div>
          <div className="text">Good post</div>
        </div>
      </din>
      <din className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 8:00AM</span>
          </div>
          <div className="text">Good post</div>
        </div>
      </din>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
