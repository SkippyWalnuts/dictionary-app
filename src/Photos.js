import React from "react";

export default function Photos(props) {
    if (props.photos) {
    return (
        <section className="Photos">
           {props.photos.map(function(photo, index) {
    return (
        <div className="mb-2" key={index} >
        <a href={photo.src.original} target="_blank" rel="noreferrer">  
        <img src={photo.src.landscape} className="img-fluid results-photos" alt={props.alt}/>
        </a> 
        </div>
    )
})}

        </section>
    );
    }
    else {
        return null;
    }
}