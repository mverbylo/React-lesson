import React from 'react';
import { useReducer } from 'react';
import { ACTION_TYPES } from './ActionTypes';
import { increment, decrement, reset, changeStep } from './actionCreators.';
import { reducer, initialState } from './reducer';

const { INCREMENT, DECREMENT, RESET } = ACTION_TYPES;
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <label>
        Step:{' '}
        <input
          type="number"
          value={state.step}
          onChange={({ target: { value } }) => dispatch(changeStep(value))}
        />
      </label>
      <button onClick={() => dispatch(increment())}>{INCREMENT}</button>
      <button onClick={() => dispatch(decrement())}>{DECREMENT}</button>
      <button onClick={() => dispatch(reset())}>{RESET}</button>
    </div>
  );
};

export default Counter;
