import React from "react";

export default function Phonetics(props) {
let youtubeUrl = `https://www.youtube.com/results?search_query=how+to+pronounce+${props.word}`;

    return (
    <div className="Phonetics my-3">
    <button><a href={youtubeUrl} id="button to Youtube phonetics search results" target="_blank" rel="noreferrer"><span id="microphone">🎙{" "}</span>{props.phonetic}</a></button>
    </div>
);

}