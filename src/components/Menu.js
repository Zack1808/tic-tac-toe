import React from 'react';
import { UilCircle, UilTimes } from '@iconscout/react-unicons'

// Importing costume made components
import Button from './Button';

// Importing the style file
import '../css/Menu.css';

// Creating the Menu component
const Menu = ({ toggleDark, dark }) => {

    const toggleDarkMode = () => {
        toggleDark(!dark)
    }

    return (
        <div className='menu'>
            <h2><UilCircle size="50" />&nbsp; Menu <UilTimes size="70" /></h2>
            <Button link="/game-options" text="Player Vs. Player" />
            <Button link="/game-options" text="Player Vs. AI" />
            <Button text="Toogle Dark Mode" click={toggleDarkMode} />
        </div>
    )
};

export default Menu;