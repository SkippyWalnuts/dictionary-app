import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
      return (
        <div className="Meaning">
            <h4>{props.partOfSpeech}</h4>
           <p>{props.definition}<em>{props.example}</em></p>
           
            <Synonyms synonyms={props.synonyms}/>
        </div>
    );
}