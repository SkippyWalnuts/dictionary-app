import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics"

export default function Results(props) {
    if (props.data) {
    return <div className="Results">
           <h2><strong>{props.data.word}{": "}</strong></h2>
           <Phonetics phonetic={props.data.phonetic}/>
           {props.data.meanings.map(function(meaning, index) {
            return <div key={index}>
                <Meaning meaning={meaning} />
            </div>;
           })}
         </div>
   } else {
    return null;
   }

   //Pexels API Key: VKUaIbSCfLNTDRHdOC2x074gm4xBiRdP4gGUkt9ocoKL9fqzzwStBS5T

}