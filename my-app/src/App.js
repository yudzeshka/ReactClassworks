import "./App.css";
import { Component } from "react";
import Button from "./Button";
import Count from "./Count";

const MAX = 5;
const MIN = -5;

class App extends Component {
  constructor() {
    super();

    this.state = {
      value: 0,
    };
  }

  handleClick = (event) => {
    const { id } = event.target;
    const { value } = this.state;
    const delta = id === "subtraction" ? -1 : 1;

    this.setState({
      value: value + delta,
    });
  };

  handleReset = () => {
    this.setState({
      value: 0,
    });
  };

  handleChange = (newValue) => {
    this.setState({ value: newValue });
  };

  render() {
    const { value } = this.state;
    return (
      <>
        <Button
          text="-"
          id="subtraction"
          onClick={this.handleClick}
          disabled={value <= MIN}
        />
        <Count value={value} onChange={this.handleChange} max={MAX} min={MIN} />
        <Button
          text="+"
          id="addition"
          onClick={this.handleClick}
          disabled={value >= MAX}
        />

        <Button text="Reset" onClick={this.handleReset} />
      </>
    );
  }
}
export default App;
