import "../App.css";
import "../index.css";
import React from "react";

import {useState, useEffect } from "react";


//react hooks
// react lifecycle

 function RenderingEX() {
  const [timer, setTimer] = useState(0);
  const [control, setControl] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    if (!control) clearInterval(timer);

    return () => clearInterval(timer);
  }, [control]);

  const startFun = () => {
    setControl((prev) => !prev);
  };
  return (
    <div className="App">
      {/* {timer % 2 === 0 && ( */}
      <Child startFun={startFun} timer={timer} control={control} />
      {/* )} */}
    </div>
  );
}

const Child = ({ timer, startFun, control }) => {
  return (
    <>
      <h1
        className={timer % 2 ? "text-red" : ""}
        style={timer % 2 ? { color: "red" } : {}}
      >
        {timer}
      </h1>
      <button onClick={startFun}>{!control ? "start" : "stop"}</button>
    </>
  );
};

// first way && opa
// second way ?


export default RenderingEX ;