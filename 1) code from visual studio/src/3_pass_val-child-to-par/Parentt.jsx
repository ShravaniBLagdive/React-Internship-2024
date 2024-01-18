import "../App.css";
import "../index.css";
import Childd from "./Childd";
import { useEffect, useState } from "react";


function Parentt (){
    
    function recevData(data){
        console.log(data);
    }
    return (
        <>
            <Childd getData={recevData} />    { /* pass data as a prop from chield */}
        
        </>
    );
}

export default Parentt;
