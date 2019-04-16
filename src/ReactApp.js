import React, { Component } from "react";
import FunctionalComp from "./FunctionalComp";
import ReactComp from "./ReactComp";
import InputComp from "./InputComp";
import StringTable from "./StringTable";
import StringModifier from "./StringModifier";

class ReactApp extends Component {
  // fake authentication Promise

  constructor(props) {
    super(props);
    this.child = React.createRef();
    this.counter = 0;
    this.state = {
      message: "This is the default message!"
    };
  }

  buttonClicked = () => {
    this.counter++;
    let msg = "State Changed on Button Click " + this.counter;
    this.setState({ message: msg });
  };

  secondButtonClicked = () => {
    this.counter++;
  };

  updateMessage = event => {
    this.setState({ message: event.target.value });
  };

  componentDidMount() {
    setTimeout(() => {
      this.counter++;
      this.setState({ message: "State Changed on timeOut " + this.counter });
    }, 50000);
  }

  render() {
    return (
      <div>
        <button onClick={this.buttonClicked}>
          Increase Count, update State
        </button>
        <button onClick={this.secondButtonClicked}>
          Dont update state, just the counter!
        </button>
        <StringTable str={this.state.message} type="dropdown" />
        <InputComp
          message={this.state.message}
          buttonEventHolder={this.buttonClicked}
          textEventHolder={this.updateMessage}
        />
        <StringModifier message={this.state.message} />

        <FunctionalComp message={this.state.message} />
        <ReactComp message={this.state.message} />

        <StringTable str={this.state.message} type="list" />
      </div>
    );
  }
}

export default ReactApp;
