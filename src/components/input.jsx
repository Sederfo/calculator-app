import React, { Component } from "react";
import "./input.css";
import PreviousNumber from "./previousNumber";
import CurrentNumber from "./currentNumber";

class Input extends Component {
  state = {};
  render() {
    //return <div className="input">{this.props.children}</div>;
    console.log(this.props);
    return (
      <div className="input">
        <PreviousNumber>{this.props.previousNumber}</PreviousNumber>
        <CurrentNumber>{this.props.currentNumber}</CurrentNumber>
      </div>
    );
  }
}

export default Input;
