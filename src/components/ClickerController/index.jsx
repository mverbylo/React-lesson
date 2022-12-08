import React, { Component } from 'react';

class ClickerController extends Component {
  render() {
    const { onClick } = this.props;
    return <button onClick={onClick}>Click</button>;
  }
}

export default ClickerController;
