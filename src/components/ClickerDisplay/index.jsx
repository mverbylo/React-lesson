import React, { Component } from 'react';
// import { Theme } from '../Clicker';
class ClickerDisplay extends Component {
  render() {
    const { counter } = this.props;

    return <p>{counter}</p>;
  }
}

export default ClickerDisplay;
