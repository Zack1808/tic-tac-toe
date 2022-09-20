import React from 'react';

// Importing the style file
import '../css/Score.css';

// Creating the score component
const Score = () => {
    return (
        <div className='score'>
            <div className="player-one-score">Player X: 0</div>
            <div className="current-turn">
                <p>Current turn:</p>
                <p>Player X</p>
            </div>
            <div className="player-two-score">Player O: 0</div>
        </div>
    )
}

export default Score;