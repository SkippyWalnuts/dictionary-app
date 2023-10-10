import React from "react";

export default function Synonyms(props) {
    if (props.synonyms) {
        return (
            <div className="Synonyms">
                <h4>AKA /<span className="akaExplanation"> Also Known As</span></h4>
            {props.synonyms.map(function (synonym, index) {
                return <span key={index}>{" / "}{synonym}</span>;
            })}
            </div>    
            );
         } else {
    return null;
    }
}