import React from "react";
import Dictionary from "./Dictionary";
import './App.css';

function App() {
  return (
    <div className="App">
      <img src="/images/book_undraw1.svg" className="img-fluid reading-img" alt="person reading"></img>
      <Dictionary defaultWord="dictionary"/>
    </div>
  );
}

export default App;
