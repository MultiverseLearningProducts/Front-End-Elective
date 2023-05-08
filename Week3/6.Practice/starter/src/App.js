import React, { useState, useEffect } from 'react';

// already importing what we need!
import store, {deposit, withdraw} from './store';

export function App() {
    const [balanceAmount, setBalanceAmount] = useState(0);

    // 👇 useEffect with store.subscribe here 👇 
    



    return (
      <div>
        <header>
          <br />Multiverse Bank
        </header>
        <br />
        <h3>Current Balance:</h3>
        <h1>{balanceAmount}</h1>
        <div className="controls">
          {/* 👇 add onClick with handler containing appropriate action creator passed to store.dispatch 👇 */}
          <button>Deposit $5</button>
          {/* 👇 add onClick with handler containing appropriate action creator passed to store.dispatch 👇 */}
          <button>Deposit $25</button>
          {/* 👇 add onClick with handler containing appropriate action creator passed to store.dispatch 👇 */}
          <button>Withdraw $5</button>
          {/* 👇 add onClick with handler containing appropriate action creator passed to store.dispatch 👇 */}
          <button>Withdraw $25</button>
        </div>
      </div>
    );
  }