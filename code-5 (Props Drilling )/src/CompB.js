import React from "react";
import CompC from "./CompC";

//lets convert this component into function component
function CompB({ name }) {
  return <CompC name={name} />;
  {
    /*Pass parent CompB data to child CompC through prop */
  }
}
export default CompB;
