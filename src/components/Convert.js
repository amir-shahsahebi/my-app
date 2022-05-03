import React, { useEffect, useState } from "react";
import axios from "axios";
const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);
  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        // when we use post request, the second parameter must be "Body" and in this case we just need params, so we left an empty Object instead of body and we go to third argument that define "params" => api link: https://cloud.google.com/translate/docs/reference/rest/v2/translate
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );

      setTranslated(data.data.translations[0].translatedText);
    };
    doTranslation();
    console.log(translated);
    // console.log("new langiage or text");
  }, [language, debouncedText]); //this called dependency array
  return <h1 className="ui header">{translated}</h1>;
};

export default Convert;
