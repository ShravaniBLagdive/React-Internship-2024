import "./styles.css";
import React from "react";
import CompA from "./CompA";

function App() {
  const name = "Shravani Lagdive"; // this is data of parent component and want to access in child component CompC

  return (
    <div className="App">
      <CompA name={name} /> {/*Pass parent data to child through prop */}
      {/* calling 1st child component comp1 in parent component App.js */}
    </div>
  );
}

export default App;
