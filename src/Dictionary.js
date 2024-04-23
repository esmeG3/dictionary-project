import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";


export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data)
  }

  function search(event) {
    event.preventDefault();
    let apiKey = `982865b6c020427a6364ef4b31o6dt0f`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);  
}
  // https://api.shecodes.io/dictionary/v1/define?word=sunset&key=982865b6c020427a6364ef4b31o6dt0f

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
    </div>
  );
}