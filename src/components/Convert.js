import React, { useEffect } from "react";
import axios from "axios";
const Convert = ({ language, text }) => {
  useEffect(() => {
    axios.post(
      // when we use post request, the second parameter must be "Body" and in this case we just need params, so we left an empty Object instead of body and we go to third argument that define "params" => api link: https://cloud.google.com/translate/docs/reference/rest/v2/translate
      "https://translation.googleapis.com/language/translate/v2",
      {},
      {
        params: {
          q: text,
          target: language.value,
          key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
        },
      }
    );
    console.log("new langiage or text");
  }, [language, text]);
  return <div>Hi</div>;
};

export default Convert;
