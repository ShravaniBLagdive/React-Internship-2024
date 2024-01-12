import { React, memo } from "react";

// Function Component
function Child(Learn) {
  //accepting prop
  console.log("Child Component");

  return <></>;
}

export default memo(Child);

// memo is use to avoid rerender(avoid print again and again ) child component on console
