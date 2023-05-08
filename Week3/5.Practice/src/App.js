import React, { useState, useEffect } from 'react';
import store, {add, subtract} from './store';

export function App() {
    const [myNumber, setMyNumber] = useState(0);

    // 👇 useEffect here, with store.subscribe 👇 



    return (
      <div>
        <header><h2>Multiverse Counter</h2></header>
        
        <h1>{myNumber}</h1>
        <div className="count-box">
          <button onClick={() => {
            // 👇 add store.dispatch call with add(1)


          }}>Add 1</button>
          <button onClick={() => {
            // 👇 add store.dispatch call with subtract(1)


          }}>Subtract 1</button>
        </div>
      </div>
    );
  }