import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics"
import "./Results.css";

export default function Results(props) {
if (props.results) {
return (
   <div className="Results">
      <div className="container-fluid">
      <div className="row">
         <div className="col-md-7">
   <h2><strong>{props.results.word}</strong></h2>
   <Phonetics phonetic={props.results.phonetic} word={props.results.word}/>
   </div>
   <div className="col-md">
      <img src="/images/dictionary_results_undraw.svg" className="results-img img-fluid" alt="person showing results in a book"></img>
   </div>
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