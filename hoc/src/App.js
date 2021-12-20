import React, { Component } from "react";
import List from "./List";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null,
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({
        items: [
          { value: 1, label: 1 },
          { value: 2, label: 2 },
          { value: 3, label: 3 },
        ],
        isLoading: false,
      });
    }, 2000);
  }
  render() {
    const { items, isLoading } = this.state;
    return <List items={items} isLoading={isLoading} />;
  }
}
