import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults=(response.data.meanings[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiKey = `982865b6c020427a6364ef4b31o6dt0f`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);  
}

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="definition of.."
          onChange={handleKeywordChange}
        />
        <input type="submit" value="Search" />{" "}
      </form>
      <Results results={results} />
    </div>
  );
}