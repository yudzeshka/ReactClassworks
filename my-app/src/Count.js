import { Component } from "react";

class Count extends Component {
  handleChange = (e) => {
    const { onChange, min, max } = this.props;

    if (e.target.value === "") {
      onChange(0);

      return;
    }

    if (e.target.value === "-") {
      onChange("-");

      return;
    }

    const parsedValue = parseInt(e.target.value, 10);

    if (Number.isNaN(parsedValue) || parsedValue > max || parsedValue < min) {
      alert(`Number should be between ${min} and ${max}.`);
      return;
    }

    onChange(parsedValue);
  };

  handleBlur = () => {
    const { value, onChange } = this.props;

    if (value === "" || value === "-") {
      onChange(0);
    }
  };

  render() {
    const { value } = this.props;

    return (
      <input
        value={value}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
      />
    );
  }
}

export default Count;
