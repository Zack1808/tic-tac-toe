import React from 'react';

// Importing the style file
import '../css/Menu.css';

// Creating the Menu component
const Menu = () => {
    return (
        <div className='menu'>
            <button>Player VS. AI</button>
            <button>Player VS. Player</button>
            <button>Toogle dark mode</button>
        </div>
    )
};

export default Menu;