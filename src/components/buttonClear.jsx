import React, { Component } from "react";
import "./buttonClear.css";

class ButtonClear extends Component {
  state = {};
  render() {
    return (
      <div className="buttonClear" onClick={this.props.handleClick}>
        {this.props.children}
      </div>
    );
  }
}

export default ButtonClear;
