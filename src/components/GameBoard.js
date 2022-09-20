import React from 'react';

// Importing costume made components
import Score from './Score';

// Importing the style file
import '../css/GameBoard.css';

// Creating the GameBoard component
const GameBoard = () => {
    return (
        <div className='game-board'>
            <Score />
            <div className="game">
                <div className="row">
                    <div className="field"></div>
                    <div className="field"></div>
                    <div className="field"></div>
                </div>
                <div className="row">
                    <div className="field"></div>
                    <div className="field"></div>
                    <div className="field"></div>
                </div>
                <div className="row">
                    <div className="field"></div>
                    <div className="field"></div>
                    <div className="field"></div>
                </div>
            </div>
        </div>
    )
};

export default GameBoard;