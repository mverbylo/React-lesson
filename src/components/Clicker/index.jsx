// import React, { Component } from 'react';
// import ClickerDisplay from '../ClickerDisplay';
// import ClickerController from '../ClickerController';

// export const Theme = React.createContext();

// class Clicker extends Component {
//   state = {
//     counter: 0,
//     step: 5,
//     theme: 'red',
//   };
//   handleClick = () => {
//     let { counter, step } = this.state;
//     this.setState({ counter: counter + step });
//   };

//   render() {
//     const { counter, theme } = this.state;

//     return (
//       <Theme.Provider value={theme}>
//         <ClickerDisplay counter={counter} />
//         <ClickerController onClick={this.handleClick} />
//       </Theme.Provider>
//     );
//   }
// }

// export default Clicker;
import { useClicker } from '../../Hooks';
import React, { useCallback, useEffect, useRef, useState } from 'react';

const Clicker = (props) => {
  const [value, setValue] = useState('');

  const elemRef = useRef();
  const inputRef = useRef();
  const counter = useClicker(elemRef);
  const prevClicks = useRef(counter);
  const renders = useRef(1);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  useEffect(() => {
    prevClicks.current = counter;
  }, [counter]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  // const handleChange = (e) => setValue(e.target.value);

  const handleChange = useCallback((e) => setValue(e.target.value), []);

  useEffect(() => {
    console.log('handleChange created');
  }, [handleChange]);

  // const logValue = () => console.log(`value is ${value}`);
  const logValue = useCallback(() => console.log(`value is ${value}`), [value]);

  useEffect(() => {
    console.log('logValue created');
  }, [logValue]);

  return (
    <div id="test">
      <h1>Clicks: {counter}</h1>
      <p>Prev clicks {prevClicks.current}</p>
      <p>Renders {renders.current}</p>
      <input ref={inputRef} type="text" value={value} onChange={handleChange} />
      <button onClick={logValue}>Log value</button>
      <div
        ref={elemRef}
        style={{
          width: '300px',
          height: '200px',
          background: 'limegreen',
          margin: '20px',
        }}
      ></div>
    </div>
  );
};

export default Clicker;
