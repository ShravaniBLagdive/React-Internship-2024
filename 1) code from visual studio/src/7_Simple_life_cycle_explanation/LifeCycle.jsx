import "../App.css";
import "../index.css";
import React from "react";

import {useState, useEffect } from "react";


export default function LifeCycle(props) {

  //declaeration
  let name = "Shravani";
  const [name1, setName1] = useState("Shravani");
  const [onupdate, setOnUpdate] = useState("Shravani Lagdive");
  //Mount


  useEffect(() => {
    setTimeout(() => {
      setName1("Shravani");
    }, 10000);
  }, []);
  // this is also mounting 


  // we can say this is updation 
  useEffect(() => {
    const timer = setInterval(() => {
      setOnUpdate((prev) => (prev += "_Shravani B. Lagdive "));
    }, 3000);

    // unmounting.. 
    // if we will not add unmounting and run the code then their will be add twice , trice ... not any effect of line no-28 code 
    return () => clearInterval(timer);
    // name will adding only once beacause of line no 28 and unmounting 

  }, [name1]);
  




  // rendering means mounting 
  return (
    <div className="App">
      <h1>Hello Lets Learn the life cycle by coding </h1>
      old :- {name}
      <br /> <br />
      Complete Name :- {name1}
      <br /> <br />
      After Update :- {onupdate}
      <br /> <br />
      <h2>These are three phases Mounting-Updation-Unmounting !</h2>
    </div>
  );
}
