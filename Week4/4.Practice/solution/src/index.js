import React from "react";
import { createRoot } from 'react-dom/client';
import 'regenerator-runtime/runtime'
import './style.css';
import { App } from './App';
// 👇 more imports here 👇 
import { Provider } from 'react-redux';
import { store } from './store';

const root = createRoot(document.getElementById("root"));
// 👇 provide redux store here 👇 
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
