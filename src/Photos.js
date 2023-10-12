import React from "react";

export default function Photos(props) {
    if (props.photos) {
    return (
        
        <div className="Photos">
            <div className="col">
           {props.photos.map(function(photo, index) {
    return (
        <div className="mb-2" key={index} >
        <a href={photo.src.original} id="link to original size of word search results photo example" target="_blank" rel="noreferrer">  
        <img src={photo.src.landscape} id="photo example of word search results" className="img-fluid results-photos" alt={props.alt}/>
        </a> 
        </div>
    )
})}

        </div>
        </div>
    );
    }
    else {
        return null;
    }
}