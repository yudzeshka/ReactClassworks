import { Component } from "react";

class Button extends Component {
  render() {
    const { text, id, onClick } = this.props;

    return (
      <button id={id} onClick={onClick} disabled={disabled}>
        {text}
      </button>
    );
  }
}

export default Button;
