import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
      return (
        <div className="Meaning m-2">
            <h4>{props.partOfSpeech}</h4>
            <div className="meaning-content px-4">
       
           <p>{props.definition}</p>
           
           <p><em>{props.example}</em></p>
           
           
            <Synonyms synonyms={props.synonyms}/>
    </div>  
    </div>
    );
}