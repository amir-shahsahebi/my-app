import React, { useEffect, useState, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (e) => {
      // console.dir(ref.current);
      if (ref.current.contains(e.target)) {
        // contains is a function that check its meaning :)
        return;
      }

      // console.log(e.target, "BODY Clicked");
      setOpen(false);
    };

    document.body.addEventListener(
      //eventListener just get called first and then React listener called
      "click",
      onBodyClick,
      { capture: true } // capture:true => means that opposite of bubbling //<=> after useRef we can delete that
    );

    return () => {
      // we use cleanup function in useEffect in order to remove listener if we haven't items <> every time this component rerender, at first inner useEffect function returns and after any changes cleanup functions render and this cycle go round adn round
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null; // null in react is dont render anything :)
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          // console.log("ITEM Clicked");
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select a color</label>
        <div
          onClick={() => {
            // console.log("DropDownClicked");
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
