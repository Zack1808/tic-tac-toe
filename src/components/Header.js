import React from 'react';
import { Link } from 'react-router-dom';
import { UilCircle, UilTimes } from '@iconscout/react-unicons'


// Importing the style file 
import '../css/Header.css';

// Creating the Header component
const Header = () => {
    return ( 
        <div className='header'>
            <h2 className='title'><UilCircle size="50" />&nbsp; Tic Tac Toe <UilTimes size="70" /></h2>
            <div className="buttons">
                <Link to="/">Return to Home</Link>
            </div>
        </div>
    )    
}

export default Header;