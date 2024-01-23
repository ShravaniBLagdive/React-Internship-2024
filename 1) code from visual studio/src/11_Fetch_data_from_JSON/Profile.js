import "../App.css";
import "../index.css";
import React from "react";
import data from "./assets/profile.json";

export default function Profile(){
    return(
        <>
        <h1> Hello This is example of fetching data from json file ....</h1>
        <h2> {data.name}</h2>
        <h3>{data.Aim}</h3>
        
        </>
    )
}