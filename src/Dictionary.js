import React from "react";
import "./Dictionary.css";

export default function Dictionary() {
    return (
        <div className="Dictionary">
            <form>
                <input type="search" placeholder="Enter a word to define"></input>
                <input type="submit" value="Search"></input>
            </form>
        </div>
    );
}