import React from 'react';
import { Link } from 'react-router-dom';


// Importing the style file 
import '../css/Header.css';

// Creating the Header component
const Header = () => {
    return ( 
        <div className='header'>
            <div className="title">Tic Tac Toe</div>
            <div className="buttons">
                <Link to="/">Return to Home</Link>
            </div>
        </div>
    )    
}

export default Header;