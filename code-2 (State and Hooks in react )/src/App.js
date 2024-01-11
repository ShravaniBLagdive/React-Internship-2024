import React from "react";
import { useState } from "react"; //import hook
import { PrintAge } from "./components/printAge";
import { PrintName } from "./components/printName";
import "./styles.css";

export default function App() {
  const [Name, setName] = useState("SL");
  const [count, setCount] = useState(0);

  const addAge = () => {
    setCount((prev) => prev + 1);
    console.log(count);
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>Lets see States and Hooks in React JS </h2>

      <PrintName tempname={Name} firstName="AshuShravanitosh" />
      <PrintAge />
      <h1>Age:{count}</h1>
      <button onClick={addAge}>add Age </button>
    </div>
  );
}
