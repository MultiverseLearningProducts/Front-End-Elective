import React from "react";
import { createRoot } from 'react-dom/client';
import 'regenerator-runtime/runtime'
import './style.css';
import { App } from './App';
// 👇 more imports here 👇 

const root = createRoot(document.getElementById("root"));
// 👇 provide redux store here 👇 

root.render(<App />);
