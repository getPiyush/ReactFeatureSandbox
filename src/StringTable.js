import React, { Component } from "react";

class StringTable extends Component {
  render() {
    let rendered = [];
    let wordLength = 0;
    this.props.str.split(" ").forEach((element, index) => {
      //console.log(element);
      if (this.props.type === "list")
        rendered.push(<ul key={index}>{element}</ul>);

      if (this.props.type === "dropdown")
        rendered.push(<option key={index}>{element}</option>);
    });

    wordLength = rendered.length;

    if (this.props.type === "list") rendered = <li>{rendered}</li>;

    if (this.props.type === "dropdown") rendered = <select>{rendered}</select>;

    return (
      <div>
        {wordLength} Words Received message from parent as {this.props.type}
        {rendered}
      </div>
    );
  }
}

export default StringTable;
