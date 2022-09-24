import React, { useState } from 'react';
import { UilCircle, UilTimes } from '@iconscout/react-unicons'

// Importing costume made components
import Score from './Score';

// Importing the style file
import '../css/GameBoard.css';

// Creating the GameBoard component
const GameBoard = ({ turn, setTurn, singlePlayer }) => {

    const multiplayerGame = (e) => {
        const field = e.target
        field.innerHTML = turn ? "X" : "O"
        setTurn(!turn);
    }

    const singlePlayerGame = (e) => {
        console.log(e.target)
    }

    // Function that will handle the input of the 
    const handleClick = (e) => {
        if(singlePlayer) singlePlayerGame(e);
        else multiplayerGame(e);
    }

    return (
        <div className='game-board'>
            <Score turn={turn} />
            <div className="game">
                <div className="row">
                    <div className="field" onClick={handleClick}></div>
                    <div className="field" onClick={handleClick}></div>
                    <div className="field" onClick={handleClick}></div>
                </div>
                <div className="row">
                    <div className="field" onClick={handleClick}></div>
                    <div className="field" onClick={handleClick}></div>
                    <div className="field" onClick={handleClick}></div>
                </div>
                <div className="row">
                    <div className="field" onClick={handleClick}></div>
                    <div className="field" onClick={handleClick}></div>
                    <div className="field" onClick={handleClick}></div>
                </div>
            </div>
        </div>
    )
};

export default GameBoard;