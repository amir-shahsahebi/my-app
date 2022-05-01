import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("apple");
  const [results, setResults] = useState([]);
  console.log(results);

  useEffect(() => {
    // let step1 = term;
    // let step2 = "";
    // console.log(step1);
    // setTimeout(() => {
    //   step2 = term;
    //   console.log(step2);
    //   if (step1 === step2) {
    //       console.log("okkkkkkkk");
    //   }
    // }, 1000);

    // if (step1 === step2) {
    // }

    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    if (term && !results.length) {
      // we suse this condition for when the page loaded for first time and we wand to dont have any delay for searching "apple" (first term that we set)
      search();
    } else {
      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 1000);
      // console.log("regular render done");

      return () => {
        console.log("cleanUp");
        clearTimeout(timeoutId);
      };
    }

    // console.log("I run after every render");
  }, [term]); // [] => only run once,, "nothing" => run once and every time that rerendered,, [term]=> once && rerender && "term" changed

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="contents">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            type="text"
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
