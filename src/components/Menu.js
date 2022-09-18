import React from 'react';
import { UilCircle, UilTimes } from '@iconscout/react-unicons'

// Importing the style file
import '../css/Menu.css';

// Creating the Menu component
const Menu = () => {
    return (
        <div className='menu'>
            <h2><UilCircle size="50" />&nbsp;&nbsp; Menu <UilTimes size="70" /></h2>
            <button>Player VS. AI</button>
            <button>Player VS. Player</button>
            <button>Toogle dark mode</button>
        </div>
    )
};

export default Menu;