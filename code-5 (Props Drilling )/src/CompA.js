import React from "react";
import CompB from "./CompB";

//lets convert this component into function component
function CompA({ name }) {
  // name - received data from parent in form of props
  return <CompB name={name} />;
  {
    /*Pass parent CompA data to child CompB through prop */
  }
}
export default CompA;
