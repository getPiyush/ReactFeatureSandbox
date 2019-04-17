import React, { Component } from "react";
import { generateRandomizedJSX } from "./utils";

class ReactComp extends Component {
  render() {
    return <div>{generateRandomizedJSX(this.props.message)}</div>;
  }
}

export default ReactComp;
