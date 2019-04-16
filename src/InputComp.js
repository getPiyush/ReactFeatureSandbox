import React, { Component } from "react";

class InputComp extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.buttonEventHolder}>
          Child button, calls eventHolder
        </button>

        <br />
        <textarea
          width="200"
          height="50"
          onChange={this.props.textEventHolder}
          value={this.props.message}
        />
      </div>
    );
  }
}

export default InputComp;
