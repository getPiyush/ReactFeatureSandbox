import React, { Component } from "react";

class ReactCComp extends Component {
  render() {
    let style = {
      color: "red"
    };

    return (
      <div style={style}>
        {`ReactCComp message =   ${this.props.message}`}
        <br />
        <button onClick={this.props.buttonEventHolder}>
          Child button, calls eventHolder
        </button>
        <input onChange={this.props.textEventHolder} />
      </div>
    );
  }
}

export default ReactCComp;
