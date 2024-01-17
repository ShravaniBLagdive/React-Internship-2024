import "../App.css";
import "../index.css";
import Child from "./Child";
import { useEffect, useState } from "react";

function Parent (){
    const data = "Shravani";
    return (
        <>
            <Child data={data} />    { /* pass data as a prop */}
        
        </>
    );
}

export default Parent;
