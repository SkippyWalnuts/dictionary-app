import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
let [word, setWord] = useState("");



    function handleResponse(response) {
    console.log(response.data);
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
            <form onSubmit={handleSubmit}>
                <input type="search" 
                placeholder="Enter your word here" 
                autoFocus={true}
                onChange={logWord}></input>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}