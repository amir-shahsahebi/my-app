import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

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

const options = [
  { label: "the color red", value: "red" },
  {
    label: "the color green",
    value: "green",
  },
  {
    label: "a shade of blue",
    value: "blue",
  },
];

const App = () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown options={options} />
    </div>
  );
};

export default App;
