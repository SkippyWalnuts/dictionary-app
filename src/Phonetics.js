import React from "react";

export default function Phonetics(props) {
    return (
    <div className="Phonetics my-3">
        <h3><span id="microphone">🎙{" "}</span>{props.phonetic}</h3>
        </div>
);

}