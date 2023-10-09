import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
let [word, setWord] = useState("");
let [results, setResults] = useState(null);
let [photos, setPhotos] = useState(null);


function handleDictionaryResponse(response) {
setResults(response.data);
}

function handlePexelsResponse(response) {
setPhotos(response.data.photos);
}

function handleSubmit(event)  {
event.preventDefault();
let apiKey = `6dt04340acdo33333a0be9731ef54b37`;
let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
axios.get(apiUrl).then(handleDictionaryResponse);

let pexelsApiKey = `VKUaIbSCfLNTDRHdOC2x074gm4xBiRdP4gGUkt9ocoKL9fqzzwStBS5T`;
let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;
let headers = { Authorization: `${pexelsApiKey}` };
axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);

}


function logWord(event)  {
    event.preventDefault();
    setWord(event.target.value);
}

return (
    <div className="Dictionary">
        <div className="Hero">
        <h1>Swallow<div>-A-</div>Dictionary</h1>
        <form onSubmit={handleSubmit} id="search-form" className="search-form">
            <input type="search" 
            placeholder="Search word here..."
            className="form-entry" 
            autoFocus={true}
            autoComplete="off"
            onChange={logWord}
            id="enter-word"></input>
            <input type="submit" value="Submit" className="form-btn"></input>
        </form>
        </div>
        <Results results={results} />
        <Photos photos={photos} alt={word} />
    </div>
);
}