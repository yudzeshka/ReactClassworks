import './App.css';
import { Component } from 'react';
import Button from './Button';
import Count from './Count';


  class App extends Component {
    constructor(){
      super();

      this.state = {
        value:0
      };
    }

    handleClick = (event) => {
const { id } = event.target;
const { value } = this.state;
const delta = id === "subtraction" ? -1 : 1;


  this.setState({
    value: value + delta
  });
    }

  render() {
    const { value } = this.state;
  return (
  <>
  <Button text="-" id="subtraction" onClick={this.handleClick}/>
  <Count value={value}/>
  <Button text="+" id="addition" onClick={this.handleClick}/>
  </>
  )
  }
  }
export default App;
