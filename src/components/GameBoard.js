import React, { useState } from 'react';
import { UilCircle, UilTimes } from '@iconscout/react-unicons'

// Importing costume made components
import Score from './Score';

// Importing the style file
import '../css/GameBoard.css';

// Creating the GameBoard component
const GameBoard = ({ turn, setTurn, singlePlayer }) => {

    const [gameover, setGameover] = useState(false);
    const winningFields = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    // Funciton that will handle the input for multiplayer
    const multiplayerGame = (e) => {
        setTurn(!turn);
    }

    // Function that will handle input for singleplayer
    const singlePlayerGame = (e) => {
        console.log(e.target.value)
    }

    // Function that will handle the input of the 
    const handleClick = (e) => {
        if(singlePlayer) singlePlayerGame(e);
        else multiplayerGame(e);
    }

    return (
        <div className={`game-board ${turn ? 'x' : 'circle'}`}>
            <Score turn={turn} />
            <div className="game">
                <div className="row">
                    <div className="field" data-value onClick={handleClick}></div>
                    <div className="field" data-value onClick={handleClick}></div>
                    <div className="field" data-value onClick={handleClick}></div>
                </div>
                <div className="row">
                    <div className="field" data-value onClick={handleClick}></div>
                    <div className="field" data-value onClick={handleClick}></div>
                    <div className="field" data-value onClick={handleClick}></div>
                </div>
                <div className="row">
                    <div className="field" data-value onClick={handleClick}></div>
                    <div className="field" data-value onClick={handleClick}></div>
                    <div className="field" data-value onClick={handleClick}></div>
                </div>
            </div>
        </div>
    )
};

export default GameBoard;