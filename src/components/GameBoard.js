import React, { useState, useEffect } from 'react';

// Importing costume made components
import Score from './Score';

// Importing the style file
import '../css/GameBoard.css';
import Modal from './Modal';

// Creating the GameBoard component
const GameBoard = ({ turn, setTurn, singlePlayer }) => {

    const [gameover, setGameover] = useState(false);
    const [scoreX, setScoreX] = useState(0);
    const [scoreO, setScoreO] = useState(0);
    const [draw, setDraw] = useState(false)
    const winningFields = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    let gameFields = document.querySelectorAll('[data-value]');

    useEffect(() => {
        gameFields = document.querySelectorAll('[data-value]');
    }, [])

    // Function that checks if a player won 
    const checkWin = () => {
        return winningFields.some(winningField => {
            return winningField.every(index => {
                return gameFields[index].classList.contains(turn ? "x" : "circle");
            })
        })
    }

    // Function that will check if it is a draw
    const checkDraw = () => {
        gameFields = Array.from(gameFields)
        return gameFields.every(field => {
            return field.classList.contains('x') || field.classList.contains('circle');
        })
    }

    // Funciton that will handle the input for multiplayer
    const multiplayerGame = (e) => {
        if(!gameover) {
            if(!(e.target.classList.contains('x') || e.target.classList.contains("circle")))  {
                turn ? e.target.classList.add('x') : e.target.classList.add('circle');
                if(!checkWin()) setTurn(!turn);
                else if(checkDraw()) {
                    setGameover(true);
                    setDraw(true)
                }
                else {
                    setGameover(true);
                    turn ? setScoreX(scoreX + 1) : setScoreO(scoreO + 1)
                };
            }
        }
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
        <>
            <div className={`game-board ${!gameover && (turn ? 'x' : 'circle')}`}>
                <Score turn={turn} scoreX={scoreX} scoreO={scoreO} />
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
            {
                gameover ? <Modal setGameover={setGameover} turn={turn} setTurn={setTurn} fields={gameFields} setDraw={setDraw} draw={draw} /> : null
            }
        </>      
    )
};

export default GameBoard;