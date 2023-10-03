import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
let [word, setWord] = useState("");

 
   function handleSubmit(event)  {
    event.preventDefault();
    alert(`'${word}' is a great word choice!`);
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