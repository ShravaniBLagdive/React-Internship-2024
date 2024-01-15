import React from "react";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "Shravani",
    };

    this.clickHandle = this.clickHandle.bind(this);
  }

  clickHandle() {}

  render() {
    return <h1>My name is : {this.state.data} </h1>;
  }
}

export default Test;
