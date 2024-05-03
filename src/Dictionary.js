import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handlePhotoResponse(response){
    setPhotos(response.data.photos);
  }

  function search() {
    let apiKey = `982865b6c020427a6364ef4b31o6dt0f`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);  

    const apiKeyPhoto = `982865b6c020427a6364ef4b31o6dt0f`;
    let apiUrlPhoto = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKeyPhoto}`;
    axios.get(apiUrlPhoto).then(handlePhotoResponse);
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
    <div className="Dictionary">
      <h1>
        Dictionary
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          onChange={handleKeywordChange}
          defaultValue={props.defaultKeyword}
        />
        
        <button type="submit" className="btn">
          <i className="fa-solid fa-magnifying-glass"></i>
          </button>
      </form>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
} else {
    load();
    return "loading";
}
}
