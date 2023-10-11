import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import Footer from "./Footer";
import "./Dictionary.css";

export default function Dictionary(props) {
let [word, setWord] = useState(props.defaultWord);
let [results, setResults] = useState(null);
let [loaded, setLoaded] = useState(false);
let [photos, setPhotos] = useState(null);

function handleDictionaryResponse(response) {
setResults(response.data);
}

function handlePexelsResponse(response) {
setPhotos(response.data.photos);
}

function search() {
let apiKey = `6dt04340acdo33333a0be9731ef54b37`;
let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
axios.get(apiUrl).then(handleDictionaryResponse);

let pexelsApiKey = `VKUaIbSCfLNTDRHdOC2x074gm4xBiRdP4gGUkt9ocoKL9fqzzwStBS5T`;
let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=5`;
let headers = { Authorization: `${pexelsApiKey}` };
axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
}

function handleSubmit(event)  {
event.preventDefault();
search();
}

function logWord(event)  {
event.preventDefault();
setWord(event.target.value);
}

function load() {
setLoaded(true);
search();
}

if (loaded) {

return (
<div className="Dictionary">
    <div className="Hero">
<img src="/images/book_undraw1.svg" className="img-fluid reading-img" alt="person reading"></img>
    <div className="hero-form">
        <h2>Did You</h2>
    <h1>Swallow<div>-A-</div>Dictionary?</h1>
        <form onSubmit={handleSubmit} id="search-form" className="search-form">
        <input type="search" 
        placeholder="Enter word here..."
        className="form-entry" 
        autoFocus={true}
        autoComplete="off"
        onChange={logWord}
        id="swallow word"></input>
        <input type="submit" value="Swallow" className="form-btn" onClick={() => {
          window.scrollTo({top: 725, left: 0, behavior: 'smooth'});
              }}></input>
        </form>
        </div>
        
        </div>

     <div className="results-container container-fluid">
        <div className="row">
    <hr />
    <div className="col-md">
<Results results={results} />
    </div>
    <div className="col-md">
<Photos photos={photos} alt={word} />
    </div>
        </div>
    <hr />
    <button className="toTopBtn"
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
              }}>
        Back to top
      </button>
    </div>
<Footer />
</div>
);

}
else {
load();
return "Loading";
}
}