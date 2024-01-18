import "../App.css";
import "../index.css";
import React from "react";
import {useState, useRef } from "react";

function Hookuserref (){
    const refElement = useRef("");
    const [name, setName] = useState("Shravani");
    console.log(refElement);

    function Reset(){
        setName("");
        refElement.current.focus();   // focus on input box 
    }

    return (
        <>

        <h1> Learning UseRef </h1>
        <input ref={refElement} type="text" value={name} onChange={(e)=>setName(e.target.value)}>
        </input>
        <button onClick={Reset}>Reset</button>

        </>
    );
}

export default Hookuserref ;
