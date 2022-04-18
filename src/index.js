import React from "react";
import ReactDOM from "react-dom";
// import faker from "@faker-js/faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" timeAgo="Today at 4:25pm" />
      <CommentDetail author="Gimy" timeAgo="Yesterday at 4:25pm" />
      <CommentDetail author="Amir" timeAgo="Today at 1:00pm" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
