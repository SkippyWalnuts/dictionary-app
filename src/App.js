import React from "react";
import Dictionary from "./Dictionary";
import './App.css';

function App() {
  return (
    <div className="App">
      <img src="/images/book_undraw1.svg" className="img-fluid reading-img" alt="person reading"></img>
      <div className="App-Content">
      <h1>Swallow<div>-A-</div>Dictionary</h1>
      <Dictionary />
      </div>
    </div>
  );
}

export default App;
