import React, { Component } from "react";

class StringModifier extends Component {
  render() {
    let style = {
      color: "red"
    };

    return (
      <div style={style}>
        {this.props.message
          .split(" ")
          .filter(input => input.length < 5)
          .join(" ")}
      </div>
    );
  }
}

export default StringModifier;
