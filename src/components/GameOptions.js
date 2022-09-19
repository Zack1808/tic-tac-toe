import React from 'react';
import { Link } from 'react-router-dom';
import { UilUser, UilCircle, UilTimes } from '@iconscout/react-unicons'

// Importing costume made components
import Input from './Input';
import Button from './Button';

// Importing the style file
import '../css/GameOptions.css';

// Creating the GameOptions component
const GameOptions = () => {
    return (
        <div className='game-options'>
            {/* <div className="single-player">
                <Input />
                <div className="buttons">
                    <Button link="/gameboard/easy" text="Easy Mode" />
                    <Button link="/gameboard/normal" text="Normal Mode" />
                    <Button link="/gameboard/Hard" text="Hard Mode" />
                </div>
            </div> */}
            <div className="multiplayer">
                <Input />
                <Input />
                <Button link="/gameboard/1v1" text="Start Game" />
            </div>
        </div>
    )
}

export default GameOptions;