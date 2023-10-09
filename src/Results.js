import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics"
import "./Results.css";

export default function Results(props) {
    if (props.results) {
    return <div className="Results">
           <h2><strong>{props.results.word}</strong></h2>
           
           {props.results.meanings.map(function(meaning, index) {
            return <div key={index}>
                <Meaning meaning={meaning} />
            </div>;
           })}
           <Phonetics phonetic={props.results.phonetic}/>
         </div>
   } else {
    return null;
   }



}