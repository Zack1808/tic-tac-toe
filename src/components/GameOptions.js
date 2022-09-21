import React from 'react';

// Importing costume made components
import Input from './Input';
import Button from './Button';

// Importing the style file
import '../css/GameOptions.css';

// Creating the GameOptions component
const GameOptions = ({ singlePlayer }) => {
    return (
        <div className='game-options'>
            {
                singlePlayer ? (
                    <div className="single-player">
                        <Input />
                        <div className="buttons">
                            <Button link="/gameboard" text="Easy Mode" />
                            <Button link="/gameboard" text="Normal Mode" />
                            <Button link="/gameboard" text="Hard Mode" />
                        </div>
                    </div>
                ) : (
                    <div className="multiplayer">
                        <Input />
                        <Input />
                        <Button link="/gameboard" text="Start Game" />
                    </div>
                )
            }
        </div>
    )
}

export default GameOptions;