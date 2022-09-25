import React, { useState, useEffect } from 'react';

// Importing costume made components
import Score from './Score';

// Importing the style file
import '../css/GameBoard.css';
import Modal from './Modal';

// Creating the GameBoard component
const GameBoard = ({ turn, setTurn, singlePlayer, gameMode, setGameMode, setSinglePlayer }) => {

    const [gameover, setGameover] = useState(false);
    const [scoreX, setScoreX] = useState(0);
    const [scoreO, setScoreO] = useState(0);
    const [draw, setDraw] = useState(false);
    const [spot, setSpot] = useState();
    const winningFields = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    let gameFields = document.querySelectorAll('[data-value]');

    useEffect(() => {
        gameFields = document.querySelectorAll('[data-value]');
        setGameMode(JSON.parse(localStorage.getItem("ttt-game-mode")))
        setSinglePlayer(JSON.parse(localStorage.getItem("ttt-single-player-mode")))
    }, []);

    useEffect(() => {
            if(!gameover){
                if(checkWin()) {
                    setGameover(true);
                    turn ? setScoreX(scoreX + 1) : setScoreO(scoreO + 1)
                }
                else if(checkDraw()) {
                    setGameover(true);
                    setDraw(true)
                }
                else setTurn(!turn);
            }
    }, [spot])

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

    // Function that will place the sign on the board
    const placeSign = (e) => {
        if(!gameover) {
            if(!(e.target.classList.contains('x') || e.target.classList.contains("circle")))  {
                const spots = searchAvailableSpots();
                setSpot(spots)
                turn ? e.target.classList.add('x') : e.target.classList.add('circle');
            }
        }
    }

    // Function that will give all the indexes of the available spots on the field
    const searchAvailableSpots = () => {
        const spots = Array.from(gameFields)
        let available = [];
        spots.forEach((spot, index) => {
            if(!spot.classList.contains('x') && !spot.classList.contains('circle')) available.push(index);
        })
        return available
    }

    // Function that will handle the AI steps for easy mode
    const handleEasyMode = () => {
        if(!gameover){
            setTimeout(() => {
                const spots = searchAvailableSpots();
                setSpot(spots);
                let ind = spots[Math.floor(Math.random() * spots.length)];
                const fields = Array.from(gameFields);
                turn ? fields[ind].classList.add('circle') : fields[ind].classList.add('x');
            }, 10)
        }
    }

    // Function that will handle the AI steps for normal mode
    const handleNormalMode = () => {

    }

    // Function that will handle the AI steps for hard mode
    const handleHardMode = () => {

    }

    // Function that will handle input for singleplayer
    const singlePlayerGame = (e) => {
        if(!gameover && !turn) {
            placeSign(e)
            if(gameMode === "easy") handleEasyMode();
            else if(gameMode === "normal") handleNormalMode();
            else handleHardMode();
        }
    }

    // Function that will handle the input of the 
    const handleClick = (e) => {
        if(!(e.target.classList.contains("x") || e.target.classList.contains("circle"))){
            if(singlePlayer) singlePlayerGame(e);
            else placeSign(e);
        }
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
                gameover ? <Modal setGameover={setGameover} turn={turn} setTurn={setTurn} fields={gameFields} setDraw={setDraw} draw={draw} singlePlayer={singlePlayer} setSinglePlayer={setSinglePlayer} /> : null
            }
        </>      
    )
};

export default GameBoard;