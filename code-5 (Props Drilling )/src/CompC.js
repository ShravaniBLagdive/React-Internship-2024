import React from "react";

//lets convert this component into function component
function CompC({ name }) {
  return (
    <h1>
      Component 3 displaying {name} using which is originally data of component
      App.js. We use prop Drilling concept in react js.
    </h1>
  );
}
export default CompC;
