import "./styles.css";
import React, { useCallback, useState } from "react";
import Child from "./Child";

export default function App() {
  const [add, setAdd] = useState(0);

  //Learn arrow function
  const Learn = useCallback(() => {}, []); // with empty dependencies

  return (
    <div className="App">
      <h1>Explore Rollback in React js </h1>
      <Child Learn={Learn} />
      {/*call function component and passing function as prop */}
      <h1> {add} </h1>
      <button onClick={() => setAdd(add + 1)}>Next Number </button>
    </div>
  );
}
