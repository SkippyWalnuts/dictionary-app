import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
let [word, setWord] = useState("");
let [results, setResults] = useState(null);


function handleResponse(response) {
console.log(response.data);
setResults(response.data);
}

function handleSubmit(event)  {
event.preventDefault();
let apiKey = `6dt04340acdo33333a0be9731ef54b37`;
let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
axios.get(apiUrl).then(handleResponse);
}


function logWord(event)  {
    event.preventDefault();
    setWord(event.target.value);
}

return (
    <div className="Dictionary">
        <form onSubmit={handleSubmit} id="search-form">
            <input type="search" 
            placeholder="Enter your word here" 
            autoFocus={true}
            autoComplete="false"
            onChange={logWord}
            id="enter-word"></input>
            <input type="submit" value="Submit"></input>
        </form>
        <Results data={results}/>
    </div>
);
}