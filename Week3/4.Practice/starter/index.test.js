const { deposit, withdraw, reducer } = require('./index.js');

test('deposit returns object with type DEPOSIT and amount passed in', () => {
  expect(deposit(1)).toEqual({
      type: 'DEPOSIT',
      amount: 1,
  });
  expect(deposit(40)).toEqual({
      type: 'DEPOSIT',
      amount: 40,
  });
  expect(deposit(365)).toEqual({
      type: 'DEPOSIT',
      amount: 365,
  });
});

test('withdraw returns object with type WITHDRAW and amount passed in', () => {
    expect(withdraw(3)).toEqual({
        type: 'WITHDRAW',
        amount: 3,
    });
    expect(withdraw(5)).toEqual({
        type: 'WITHDRAW',
        amount: 5,
    });
    expect(withdraw(200)).toEqual({
        type: 'WITHDRAW',
        amount: 200,
    });
});

test('reducer returns the new updated state when an action is passed to it', () => {
    expect(reducer(
          {
              balance: 10 // current state
          },
          {
              type: 'DEPOSIT',
              amount: 3,
          }
    )).toEqual({
        balance: 13
    });
    
});

test('reducer returns the new updated state when an action is passed to it', () => {
    expect(reducer(
          undefined,
          {
              type: 'DEPOSIT',
              amount: 3,
          }
    )).toEqual({
        balance: 3
    });
    
});  