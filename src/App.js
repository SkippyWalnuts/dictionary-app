import React from "react";
import Dictionary from "./Dictionary";
import './App.css';

function App() {
  return (
    <div className="App">
      <img src="/images/mouth-dictionary.png" className="img-fluid mouth-img" alt="mouth speaking"></img>
      <h1>Swallow-A-Dictionary</h1>
      <Dictionary />
      
    </div>
  );
}

export default App;
