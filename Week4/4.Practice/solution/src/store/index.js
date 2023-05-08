// 👇 set up redux store here 👇 
import { configureStore } from '@reduxjs/toolkit';
import petsReducer from './petsSlice.js'; // new

export const store = configureStore({
  reducer: {
    pets: petsReducer, // new
  },
});