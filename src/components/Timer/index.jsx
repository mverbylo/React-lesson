import React, { Component } from 'react';
import styles from './Timer.module.scss';

class Timer extends Component {
  state = {
    number: 10,
    isDoubled: false,
    
  };

  decrementNumber = () => {
    const { isDoubled } = this.state;
    // if (number === 0) {
    //   clearInterval(this.timerId);
    // } else {
    this.setState((state) => ({
      number: state.number - 1,
    }));
    if (isDoubled) {
      console.log('Doubled');
      // когда надо самому свежему состоянию
      this.setState((updatedState) => {
        const newState = {
          number: updatedState.number - 1,
        };
        return newState;
      });
    }
    // }
  };

  componentDidMount() {
    console.log('Did Mount');

    this.timerId = setInterval(this.decrementNumber, 1000);
  }

  componentDidUpdate() {
    console.log('Did update');
    // const { number } = this.state;
  }

  componentWillUnmount() {
    console.log('Will unmount');

    clearInterval(this.timerId);
  }

  render() {
    const { number } = this.state;

    const parStyles = {
      color: number > 0 ? 'green' : 'red',
      fontSize: '45px',
      fontWeight: 'bold',
    };

    return (
      <div>
        <p style={parStyles}>{number}</p>
        <button className={styles.btn} onClick={this.decrementNumber}>
          Decrement
        </button>
      </div>
    );
  }
}

export default Timer;
