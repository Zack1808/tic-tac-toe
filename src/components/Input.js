import React from 'react';
import { UilUser } from '@iconscout/react-unicons'

// Importing the tyle file
import '../css/Input.css';

// Creating the Input component
const Input = () => {
    return (
        <div className='name'>
            <UilUser />
            <input type="text"  placeholder='Enter your name...' />
        </div>
    )
}

export default Input;