import { createStore } from "redux";

const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';

export const add = amount => ({
  type: ADD,
  amount
});

export const subtract = amount => ({
  type: SUBTRACT,
  amount
});

const intialState = { number: 0 };
const store = createStore((state = intialState, action) => {
  switch (action.type) {
    case ADD:
      return { number: state.number + action.amount }
    case SUBTRACT:
      return { number: state.number - action.amount }
    default:
      return state;
  }
})

export default store;
