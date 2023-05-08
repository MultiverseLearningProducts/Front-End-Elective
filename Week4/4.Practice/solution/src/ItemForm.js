import React, { useState } from 'react';
// 👇 another import here 👇 
import { useDispatch } from 'react-redux';
import { addPet } from './store/petsSlice.js';


export const ItemForm = () => {
  const [name, setName] = useState('');
  // 👇 call useDispatch here 👇 
  const dispatch = useDispatch();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(name);
    // 👇 pass addPet's  result to dispatch here 👇 
    dispatch(addPet(name));
    setName(''); // clears out the form field
  }

  return <div className="item-container" id="item-add">
    <form className='form-input-list' onSubmit={handleSubmit}>
      <h3>Add a Pet</h3>
      <label>Pet Name:</label>
      <input type="text" name="name" value={name} onChange={(ev) => setName(ev.target.value)}/>
      <span className='options-container'>
        <button type="submit">Add</button>
      </span>
    </form>
  </div>
}
