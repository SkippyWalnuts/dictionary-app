import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics"
import "./Results.css";

export default function Results(props) {
if (props.results) {
return (
   <div className="Results">
      <div className="row">
         <div className="col">
   <h2><strong>{props.results.word}</strong></h2>
   <Phonetics phonetic={props.results.phonetic} word={props.results.word}/>
   </div>
   <div className="col">
      <img src="/images/dictionary_results_undraw.svg" className="img-fluid"></img>
   </div>
   </div>
   {props.results.meanings.map(function(meaning, index) {
      return <div key={index}>
         <Meaning definition={meaning.definition} partOfSpeech={meaning.partOfSpeech} />
         <Meaning example={meaning.example} synonyms={meaning.synonyms} />
      </div>;
   })}
   </div>
);
} 
else {
return null;
   }


}