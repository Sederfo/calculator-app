import React, { Component } from "react";
import "./buttonOperator.css";

class ButtonOperator extends Component {
  state = {};

  render() {
    return (
      <div
        className="buttonOperator"
        onClick={() => this.props.handleClick(this.props.children)}
      >
        {this.props.children}
      </div>
    );
  }
}

export default ButtonOperator;
