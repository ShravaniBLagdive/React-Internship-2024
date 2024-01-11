import React from "react";

function Header(props) {
  console.log(" Lets check value of props = ", props);
  return <h1>I Am Header Component. hello {props.name}</h1>;
}

export default Header;
