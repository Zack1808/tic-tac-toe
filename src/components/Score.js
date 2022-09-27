import React from 'react';

// Importing the style file
import '../css/Score.css';

// Creating the score component
const Score = ({ turn, scoreX, scoreO }) => {
    return (
        <div className='score'>
            <div className="player-one-score">Player X: {scoreX}</div>
            <div className="current-turn">
                <p>Current turn:</p>
                {
                    turn === "x" ? (
                        <p>Player X</p>
                    ) : (
                        <p>Player O</p>
                    )
                }
            </div>
            <div className="player-two-score">Player O: {scoreO}</div>
        </div>
    )
}

export default Score;