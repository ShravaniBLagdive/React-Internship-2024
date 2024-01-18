import React, { useState } from "react";

function Childd (props){
    const [name, setName]=useState();

    function HandleSubmit(e){
        e.preventDefault();
        props.getDarta(name);
    }

    return(
        <div>
            {/* when user enter data and hit submit button then that data handle by parent component */}
            <form onSubmit={HandleSubmit}>
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}>
                </input>

                <button>Submit</button>    
                </form>
            {/* onchange is event handler here  */}
        </div>
    )
}

export default Childd;