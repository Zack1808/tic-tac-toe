import React from 'react';

// Importing costume made components
import Button from './Button';

// Importing the style file
import '../css/GameOptions.css';

// Creating the GameOptions component
const GameOptions = () => {
    return (
        <div className='game-options'>
            <div className="single-player">
                <div className="buttons">
                    <Button link="/gameboard" text="Easy Mode" />
                    <Button link="/gameboard" text="Normal Mode" />
                    <Button link="/gameboard" text="Hard Mode" />
                </div>
            </div>
        </div>
    )
}

export default GameOptions;