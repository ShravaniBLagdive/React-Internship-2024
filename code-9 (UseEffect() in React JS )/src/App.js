import "./styles.css";
import React from "react";
import { useState, useEffect } from "react";

export default function App() {
  const [count, setCounter] = useState(0);

  // useEffect with 2 arg = 1st is func, 2nd - optional
  useEffect(() => {
    console.log("Component Mounted");
  }, [count]); //[] empty dependencies will stop re-rendering of UseEffect

  function updateCount() {
    setCounter(count + 1);
  }

  return (
    <div className="App">
      <h1>Expose Knoweledge about UseEffect()</h1>
      <h1> Button clicked {count} times </h1>
      <button onClick={updateCount}>Click</button>
    </div>
  );
}
