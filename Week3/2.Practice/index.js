import { createStore } from 'redux';

//  👇 Reducer here 👇 
const initialState = {balance: 0};
const reducer = (state = initialState, action) => {
  if(action.type === 'DEPOSIT')
    return {balance: state.balance + action.amount};
  else
    return state;
};
const store = createStore(reducer);

//  👇 Testing Calls 👇 Feel free to comment-in and -out 😃. 
console.log(store.getState()); // {balance: 0}
store.dispatch({type: 'DEPOSIT', amount: 100});
console.log(store.getState()); // {balance: 100}
