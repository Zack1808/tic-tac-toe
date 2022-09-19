import React from 'react';
import { UilCircle, UilTimes } from '@iconscout/react-unicons'

// Importing the style file
import '../css/Menu.css';

// Creating the Menu component
const Menu = () => {
    return (
        <div className='menu'>
            <h2><UilCircle size="50" />&nbsp; Menu <UilTimes size="70" /></h2>
            <button><UilCircle className="icon"/>&nbsp; Player VS. AI <UilTimes size="35" className="icon" /></button>
            <button><UilCircle className="icon"/>&nbsp; Player VS. Player <UilTimes size="35" className="icon" /></button>
            <button><UilCircle className="icon"/>&nbsp; Toogle Dark Mode <UilTimes size="35" className="icon" /></button>
        </div>
    )
};

export default Menu;