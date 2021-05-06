import React, { Component } from "react";

class currentNumber extends Component {
  state = {};
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default currentNumber;
