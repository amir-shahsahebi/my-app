import React from "react";
import ReactDOM from "react-dom";
import faker from "@faker-js/faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:25pm"
        comment="Hi guys"
        imgLink={faker.image.avatar()}
      />
      <CommentDetail
        author="Gimy"
        timeAgo="Yesterday at 4:25pm"
        comment="yoaaaaaaa"
        imgLink={faker.image.avatar()}
      />

      <ApprovalCard>
        {
          <CommentDetail
            author="Amir"
            timeAgo="Today at 1:00pm"
            comment="Lets go !!!!!!"
            imgLink={faker.image.avatar()}
          />
        }
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
