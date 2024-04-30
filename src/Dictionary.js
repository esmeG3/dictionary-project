import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search() {
    let apiKey = `982865b6c020427a6364ef4b31o6dt0f`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);  
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
}

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load(){
    setLoaded(true);
    search();
  }

if (loaded) {
  return (
    <div className="dictionary">
      <form onSubmit={handleSubmit}>
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
} else {
    load();
    return "loading";
}
}
