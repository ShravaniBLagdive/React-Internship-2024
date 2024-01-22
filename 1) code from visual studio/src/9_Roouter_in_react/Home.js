import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
        <>
        <div> Home </div>
        <link to="/Page1"> Page 1</link>
        <link to="/Page2"> Page 2</link>
        </>
    )
}

export default Home;