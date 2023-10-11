import React from "react";

export default function Synonyms(props) {
    if (props.synonyms) {
        return (
            <div className="Synonyms mb-3">
                <hr />
                <h5>AKA /<span className="akaExplanation"> Also Known As</span></h5>
                <ul>
            {props.synonyms.map(function (synonym, index) {
                return <li key={index}>{synonym}</li>;
            })}
           </ul> </div>    
            );
         } else {
    return null;
    }
}