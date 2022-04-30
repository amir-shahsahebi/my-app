import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: "What is React?",
    content: "React is a front and javascript framework",
  },
  {
    title: "Why use react?",
    content: "React is a favorite library",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating component",
  },
];

const App = () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};

export default App;