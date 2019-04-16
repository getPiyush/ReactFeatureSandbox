import React, { Component } from "react";

class ReactComp extends Component {
  render() {
    return <div>{`ReactComp message =  ${this.props.message}`}</div>;
  }
}

export default ReactComp;
