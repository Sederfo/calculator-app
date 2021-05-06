import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./App.css";
import Button from "./components/button";
import ButtonClear from "./components/buttonClear";
import ButtonOperator from "./components/buttonOperator";
import Input from "./components/input";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentNumber: "",
      previousNumber: "",
      operator: "",
    };
  }

  addToInput = (val) => {
    if (this.state.currentNumber == "") {
      if (val == "0") return;

      if (val == ".") {
        this.setState({ currentNumber: this.state.currentNumber + "0." });
        return;
      }

      this.setState({ currentNumber: val });
    } else {
      if (val == ".") {
        console.log("here2");
        if (this.state.currentNumber.indexOf(".") == -1) {
          this.setState({ currentNumber: this.state.currentNumber + "." });
        } else return;
      } else {
        console.log("here");
        this.setState({ currentNumber: this.state.currentNumber + val });
      }
    }
  };

  handleOperation = (val) => {
    if (this.state.operator != "") {
      this.evaluateExpression();
      this.setState({ previousNumber: this.state.currentNumber });
      return;
    }

    this.setState({
      operator: val,
      previousNumber: this.state.currentNumber + " " + val,
      currentNumber: "",
    });
  };

  evaluateExpression = () => {
    switch (this.state.operator) {
      case "+":
        this.setState({
          currentNumber: (
            parseFloat(this.state.previousNumber) +
            parseFloat(this.state.currentNumber)
          ).toString(),
          previousNumber: "",
          operator: "",
        });
        break;
      case "-":
        this.setState({
          currentNumber: (
            parseFloat(this.state.previousNumber) -
            parseFloat(this.state.currentNumber)
          ).toString(),
          previousNumber: "",
          operator: "",
        });
        break;
      case "*":
        this.setState({
          currentNumber: (
            parseFloat(this.state.previousNumber) *
            parseFloat(this.state.currentNumber)
          ).toString(),
          previousNumber: "",
          operator: "",
        });
        break;
      case "/":
        this.setState({
          currentNumber: (
            parseFloat(this.state.previousNumber) /
            parseFloat(this.state.currentNumber)
          ).toString(),
          previousNumber: "",
          operator: "",
        });
        break;
    }
  };

  clearInput = () => {
    console.log("clear button clicked");
    this.setState({
      input: "",
      operator: "",
      previousNumber: "",
      currentNumber: "",
    });
  };

  render() {
    console.log("test input", this.state);
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <Input
              previousNumber={this.state.previousNumber}
              currentNumber={this.state.currentNumber}
            ></Input>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <ButtonOperator handleClick={this.handleOperation}>
              /
            </ButtonOperator>
          </div>

          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <ButtonOperator handleClick={this.handleOperation}>
              *
            </ButtonOperator>
          </div>

          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <ButtonOperator handleClick={this.handleOperation}>
              +
            </ButtonOperator>
          </div>

          <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.evaluateExpression}>=</Button>
            <ButtonOperator handleClick={this.handleOperation}>
              -
            </ButtonOperator>
          </div>

          <div className="row">
            <ButtonClear handleClick={this.clearInput}> Clear </ButtonClear>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
