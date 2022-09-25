import React from 'react';

// Importing costume made components
import Button from './Button';

// Importing the style file
import '../css/GameOptions.css';
import { useEffect } from 'react';

// Creating the GameOptions component
const GameOptions = ({ gameMode, setGameMode }) => {

    // Function that will set the gamemode to easy
    const easyMode = () =>{
        setGameMode('easy');
        localStorage.setItem('ttt-game-mode', JSON.stringify('easy'))
    }

    // Function that will set the gamemode to normal
    const normalMode = () =>{
        setGameMode('normal');
        localStorage.setItem('ttt-game-mode', JSON.stringify('normal'))
    }

    // Function that will set the gamemode to hard
    const hardMode = () =>{
        setGameMode('hard');
        localStorage.setItem('ttt-game-mode', JSON.stringify('hard'))
    }

    return (
        <div className='game-options'>
            <div className="single-player">
                <div className="buttons">
                    <Button link="/gameboard" text="Easy Mode" click={easyMode} />
                    <Button link="/gameboard" text="Normal Mode" click={normalMode} />
                    <Button link="/gameboard" text="Hard Mode" click={hardMode} />
                </div>
            </div>
        </div>
    )
}

export default GameOptions;