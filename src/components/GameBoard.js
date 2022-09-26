import React, { useState, useEffect } from 'react';

// Importing costume made components
import Score from './Score';

// Importing the style file
import '../css/GameBoard.css';
import Modal from './Modal';

// Creating the GameBoard component
const GameBoard = ({ turn, setTurn, singlePlayer, gameMode, setGameMode, setSinglePlayer }) => {

    // Setting up all wariables;
    const [gameOver, setGameOver] = useState(false);
    const [origBoard, setOrigBoard] = useState();
    const player1 = "x"; const player2 = "circle";
    const winningFields = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    const cells = document.querySelectorAll("[data-value]");

    // Will call the startGame function once the components have rendered
    useEffect(() => {
        startGame();
    }, []);

    // Function that will start the game
    const startGame = () => {
        setGameOver(false);
        setOrigBoard(Array.from(Array(9).keys()))
        cells.forEach(cell => {
            cell.classList.remove(player1);
            cell.classList.remove(player2);
        })
    }

    // Function that will handle the field click event
    const handleClick = (event) => {
        if(!gameOver){
            if(singlePlayer) changeTurn(Array.from(cells).indexOf(event.target), player1)
            else changeTurn(Array.from(cells).indexOf(event.target), turn)
        }
    }

    // Function taht will handle the turn change
    const changeTurn = (index, currentPlayer) => {
        let tempBoard = origBoard;
        tempBoard[index] = currentPlayer;
        setOrigBoard(tempBoard)
        cells[index].classList.add(currentPlayer);
        let gameWon = checkWin(origBoard, currentPlayer)
        if(gameWon) setGameOver(true);
        else setTurn(currentPlayer === "x" ? player2 : player1)
    }

    // Function that checks if the player won
    const checkWin = (board, currentPlayer) => {
        let placed = board.reduce((acc, elem, i) => (elem === currentPlayer) ? acc.concat(i) : acc, []);
        let gameWon = null;
        for(let [index, win] of winningFields.entries()) {
            if(win.every(element => placed.indexOf(element) > -1)) {
                gameWon = {index: index, currPlayer: currentPlayer};
                break;
            }
        }

        return gameWon;
    }

    return (
        <>
            <div className={`game-board ${!gameOver && turn}`}>
                {/* <Score turn={turn} scoreX={scoreX} scoreO={scoreO} /> */}
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
            {/* {
                gameover ? <Modal setGameover={setGameover} turn={turn} setTurn={setTurn} fields={gameFields} setDraw={setDraw} draw={draw} singlePlayer={singlePlayer} setSinglePlayer={setSinglePlayer} /> : null
            } */}
        </>      
    )
};

export default GameBoard;