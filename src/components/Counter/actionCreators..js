import { ACTION_TYPES } from './ActionTypes';

const { INCREMENT, DECREMENT, CHANGE_STEP, RESET } = ACTION_TYPES;

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const changeStep = (value) => ({ type: CHANGE_STEP, payload: +value });
export const reset = () => ({ type: RESET });
