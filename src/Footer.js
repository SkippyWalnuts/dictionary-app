import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <div className="Footer">
    <p>
        {""}🎨{" "}
        <a
          href="https://github.com/SkippyWalnuts/dictionary-app"
          id="link to github page with source code for current website"
          target="_blank"
          rel="true noopener noreferrer"
        >
          Source-Code
        </a>
        {" "}
        by 
        {" "}
        <a href="https://visionary-dragon-63ebd9.netlify.app/"
        id="link to Becca Early's website portfolio"
         target="_blank"
         rel="true noopener noreferrer">
          Becca Early
          </a>
          {" "}👾{""}
     </p>
        </div>);
}