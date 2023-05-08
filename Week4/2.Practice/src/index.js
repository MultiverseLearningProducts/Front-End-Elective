import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

// 👇 import Provider and store here 👇 



const root = createRoot(document.getElementById("root"));

// 👇 render Provider, passing in store as a prop. Should wrap around App 👇 
root.render(


    <App />



);
