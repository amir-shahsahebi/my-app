import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

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
  {
    label: "the color red",
    value: "red",
  },
  {
    label: "the color green",
    value: "green",
  },
  {
    label: "a shade of blue",
    value: "blue",
  },
];

const showAccordion = () => {
  if (window.location.pathname === "/") return <Accordion items={items} />;
};
const showList = () => {
  if (window.location.pathname === "/list") return <Search />;
};
const showDropdown = () => {
  if (window.location.pathname === "/dropdown") return <Dropdown />;
};
const showTranslate = () => {
  if (window.location.pathname === "/translate") return <Translate />;
};

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}

      {/* <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          options={options}
          onSelectedChange={setSelected}
        />
      ) : null} */}
      <Header />
      <Route path="/">
        {/* when we put a jsx inside a component it define as prop of children */}
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>

      {/* <Translate /> */}
    </div>
  );
};

export default App;
