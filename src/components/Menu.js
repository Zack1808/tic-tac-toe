import React from 'react';
import { UilCircle, UilTimes } from '@iconscout/react-unicons'

// Importing costume made components
import Button from './Button';

// Importing the style file
import '../css/Menu.css';

// Creating the Menu component
const Menu = ({ toggleDark, dark, setSinglePlayer }) => {

    // Function that changes the dark mode status
    const toggleDarkMode = () => {
        toggleDark(!dark)
    }

    // Function that will set the single player status to true
    const singlePlayer = () => {
        setSinglePlayer(true);
        localStorage.setItem('ttt-single-player-mode', JSON.stringify(true))
    }

    // Function taht will set the singleplayer option to false
    const multiPlayer = () => {
        setSinglePlayer(false);
        localStorage.setItem('ttt-single-player-mode', JSON.stringify(false))
    }

    return (
        <div className='menu'>
            <h2><UilCircle size="50" />&nbsp; Menu <UilTimes size="70" /></h2>
            <Button link="/gameboard" text="Player Vs. Player" click={multiPlayer} />
            <Button link="/game-options" text="Player Vs. AI" click={singlePlayer} />
            <Button text="Toogle Dark Mode" click={toggleDarkMode} />
        </div>
    )
};

export default Menu;