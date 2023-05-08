// 👇 create pets slice here 👇 
import { createSlice } from '@reduxjs/toolkit';
const initialState = ['Leo', 'Bella', 'Tiger', 'Rosie'];

export const petsSlice = createSlice({
  name: 'pets',
  initialState,
  reducers: {
    addPet: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { addPet } = petsSlice.actions;
export default petsSlice.reducer;