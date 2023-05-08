import React from 'react';
import { ItemForm } from './ItemForm';
// 👇 more imports here 👇 
import { useSelector } from 'react-redux';


export const App = () => {
  // 👇 change this to read from store state instead of hard-coded 👇 
    const pets = useSelector((state) => state.pets);
    console.log(pets)

	return (
		<main>	
            <h1>Pet Names</h1>
			<ItemForm/>
			<h2>Pets</h2>
            <ul>

                {pets.map(name => (
                <li className="item-container" key={name}>{name}</li>
                ))}

            </ul>
		</main>
	)
}
