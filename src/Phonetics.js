import React from "react";

export default function Phonetics(props) {
    return (
    <div className="Phonetics">
        <h3><span id="microphone">🎙{" "}</span>{props.phonetic}</h3>
        </div>
);

}