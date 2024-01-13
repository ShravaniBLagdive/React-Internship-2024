import "./styles.css";
import { useEffect, useState } from "react";

export default function App({ name }) {
  const [state, setState] = useState(0); //state declaretion

  //useEffect ( function , Dependencies)
  const fetchAPI = async () => {
    console.log("Fetch API");
  };

  useEffect(() => {
    // execute once
    fetchAPI();
  }, []); //empty dependencies

  useEffect(() => {
    // re-render
    return () => {
      //unmount
    };
  }, [state]);

  return (
    <div className="App">
      <h1>Hello...!</h1>
      <h2>Let's Go ahead and Start to work with React Life Cycle...!</h2>
      <h1>
        {state} !== {name}
      </h1>
    </div>
  );
}

// for mount ------
// constructor + gatederivedprops = > declaretion
//render

// for update -----
// re-render

// for unmount -----
// web apis
