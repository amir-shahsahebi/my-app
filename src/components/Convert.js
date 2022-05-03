import React, { useEffect } from "react";
import axios from "axios";
const Convert = ({ language, text }) => {
  useEffect(() => {
    console.log("new langiage or text");
  }, [language, text]);
  return <div>Hi</div>;
};

export default Convert;
