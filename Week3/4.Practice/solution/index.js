// Action types - DO NOT EDIT
const DEPOSIT = 'DEPOSIT';
const WITHDRAW = 'WITHDRAW';

// 👇 action creators here 👇 
export const deposit = (amount) => ({
    type: DEPOSIT,
    amount
});

export const withdraw = (amount) => ({
    type: WITHDRAW,
    amount
});


// 👇 initial state here 👇 
const initialState = { balance: 0 };


// 👇 reducer here 👇 
export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case DEPOSIT:
            return { balance: state.balance + action.amount };
        case WITHDRAW:
            return { balance: state.balance - action.amount };
        default:
            return state;
    
    }
};

