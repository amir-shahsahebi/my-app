import React from "react";
import Dropdown from "./DropDown";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

const Translate = () => {
  return (
    <div>
      <Dropdown />
    </div>
  );
};

export default Translate;