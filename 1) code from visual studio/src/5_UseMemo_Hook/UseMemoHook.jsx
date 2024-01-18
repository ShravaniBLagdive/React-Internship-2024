import "../App.css";
import "../index.css";
import React from "react";

import {useState, useMemo } from "react";

function UseMemo (){
    const [add,setAdd]=useState(0);
    const [minus,setMinus]=useState(100);

    const multiplication=useMemo (function multiply(){
        console.log("In console print only when press add btn not when press minus btn !")
        return add*10;
    },[add])


    return (
        <>

        <h1> Learning UseMemo Hook  </h1>
        <button onClick={()=>setAdd(add+1)}>Addition</button>
        <span>{add}</span>
        <br /><br /> 
        <button onClick={()=>setMinus(minus-1)}>Substraction</button>
        <span>{minus}</span>

        </>
    );
}

export default UseMemo ;
