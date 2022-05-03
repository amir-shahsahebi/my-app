import React, { useEffect, useState, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener(
      //eventListener just get called first and then React listener called
      "click",
      (e) => {
        console.log(e.target, "BODY Clicked");
        setOpen(false);
      },
      { capture: true } // capture:true => means that opposite of bubbling
    );
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
          console.log("ITEM Clicked");
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });
  console.log(ref.current);
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select a color</label>
        <div
          onClick={() => {
            console.log("DropDownClicked");
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
