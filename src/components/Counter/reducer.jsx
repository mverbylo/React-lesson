import { ACTION_TYPES } from './ActionTypes';

const { INCREMENT, DECREMENT, CHANGE_STEP, RESET } = ACTION_TYPES;
export const initialState = { count: 0, step: 1 };

export function reducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + state.step };
    case DECREMENT:
      return { ...state, count: state.count - state.step };
    case CHANGE_STEP:
      return { ...state, step: Math.abs(action.payload) };
    case RESET:
      return { ...initialState };
    default:
      return state;
  }
}
