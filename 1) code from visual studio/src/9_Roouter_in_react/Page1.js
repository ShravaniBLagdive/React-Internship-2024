import React from "react";
import { Link } from "react-router-dom";

function Page1(){
    return(
        <>
        
        <link to="/Home"> Home </link>
        <div> Page1 </div>
        <link to="/Page2"> Page 2</link>
        </>
    )
}

export default Page1;