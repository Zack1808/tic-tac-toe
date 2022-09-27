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
    const [draw, setDraw] = useState(false);
    const [scoreX, setScoreX] = useState(0);
    const [scoreO, setScoreO] = useState(0);
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
        setSinglePlayer(JSON.parse(localStorage.getItem("ttt-single-player-mode")))
        setGameMode(JSON.parse(localStorage.getItem("ttt-game-mode")))
    }, []);

    /*
    Functions that are handeled at the start of the game
    */

        // Function that will start the game
        const startGame = () => {
            setTurn(player1);
            setGameOver(false);
            setDraw(false);
            setOrigBoard(Array.from(Array(9).keys()))
            cells.forEach(cell => {
                cell.classList.remove(player1);
                cell.classList.remove(player2);
            })
        }

    /* 
    Functions used by the human player
     */

        // Function that will handle the field click event
        const handleClick = (event) => {
            if(!gameOver){
                if(typeof origBoard[Array.from(cells).indexOf(event.target)] === "number"){
                    if(singlePlayer) {
                        changeTurn(Array.from(cells).indexOf(event.target), player1);
                        if(!checkDraw()) changeTurn(bestSpot(), player2);
                    }
                    else {
                        if(!checkDraw()) changeTurn(Array.from(cells).indexOf(event.target), turn);
                    }
                }
            }
        }

        // Function taht will handle the turn change
        const changeTurn = (index, currentPlayer) => {
            let tempBoard = origBoard;
            tempBoard[index] = currentPlayer;
            setOrigBoard(tempBoard)
            cells[index].classList.add(currentPlayer);
            let gameWon = checkWin(origBoard, currentPlayer)
            if(gameWon) {
                setGameOver(true);
                currentPlayer === "x" ? setScoreX(scoreX + 1) : setScoreO(scoreO + 1)
            }
            else setTurn(currentPlayer === "x" ? player2 : player1);
        }

        // Function that checks for all empty fields
        const emptyFields = () => {
            return origBoard.filter(field => typeof field === "number");
        }

    /*
    Functoins used by the AI
     */

        // Function that chooses the best spot for the game
        const bestSpot = () => {
            if(gameMode === "easy") return easyMode();
            if(gameMode === "normal") return normalMode();
            if(gameMode === "hard") return hardMode(origBoard, player2).index;
        }

    /*
    Functions that will handle the different AI modes
    */
    
        // Function that will handle the easy mode
        const easyMode = () => {
            const availablespots = emptyFields()
            return origBoard.indexOf(availablespots[Math.floor(Math.random() * availablespots.length)])
        }

        // Function that will handle the normal mode 
        const normalMode = () => {
            const availablespots = emptyFields();
            let amount = [];
            let move = origBoard.indexOf(availablespots[Math.floor(Math.random() * availablespots.length)]);
            winningFields.forEach(win => {
                let count = 0;
                if(win.every(field => typeof origBoard[field] !== "number")) count = 20;
                else {
                    win.forEach(field => {
                        if(origBoard[field] === "x") count = count + 1;
                        if(origBoard[field] === "circle") count = count + 2;
                    })
                }
                amount.push(count);
            })
            console.log(amount)
            if(amount.indexOf(4) > -1) {
                winningFields[amount.indexOf(4)].forEach(i => typeof origBoard[i] === "number" && (move = i));
            }
            else if(amount.indexOf(2) > -1){
                winningFields[amount.indexOf(2)].forEach(i => typeof origBoard[i] === "number" && (move = i));
            }
            return move;
        }

        // Function that will handle the unbeateable AI 
        const hardMode = (board, currPlayer) => {
            let availSpots = emptyFields(board);
            if(checkWin(board, currPlayer)) return {score: -10}
            else if(checkWin(board, player2)) return {score: 10}
            else if(availSpots.length === 0) return {score: 0}
            let moves = [];
            for(let i = 0; i < availSpots.length; i++){
                let move = {};
                move.index = board[availSpots[i]];
                board[availSpots[i]] = currPlayer;
                if(currPlayer === player2) {
                    let result = hardMode(board, player1);
                    move.score = result.score;
                } else {
                    let result = hardMode(board, player2);
                    move.score = result.score;
                }
                board[availSpots[i]] = move.index;
                moves.push(move)
            }
            let bestMove;
            if(currPlayer === player2) {
                let bestScore = -10000;
                for(let i = 0; i < moves.length; i++){
                    if(moves[i].score > bestScore) {
                        bestScore = moves[i].score
                        bestMove = i;
                    }
                }
            }
            else {
                let bestScore = 10000;
                for(let i = 0; i < moves.length; i++){
                    if(moves[i].score < bestScore) {
                        bestScore = moves[i].score
                        bestMove = i;
                    }
                }
            }

            return moves[bestMove];
        }  
    
    /*
    Functions that will check if the current status of the game
    */

        // Function that will check if all fields have been filled
        const checkDraw = () => {
            if(emptyFields().length === 0) {
                setDraw(true);
                return true;
            }
            return false;
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
                gameOver ? <Modal turn={turn} draw={draw} singlePlayer={singlePlayer} restart={startGame} /> : null
            }
        </>      
    )
};

export default GameBoard;