import React from 'react';
import { UilCircle, UilTimes } from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';

// Importing the style file
import '../css/Button.css'

// Creating the Button component
const Button = ({ link, text, click = "" }) => {
    return(
        <>
            {link ? (
                <Link onClick={click} to={link} className="button"><UilCircle className="icon"/>&nbsp; {text} <UilTimes size="35" className="icon" /></Link>
            ) : (
                <button onClick={click}><UilCircle className="icon"/>&nbsp; {text} <UilTimes size="35" className="icon" /></button>
            )}
        </>
    )
}

export default Button;