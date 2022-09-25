import React from 'react';
import ReactDOM from 'react-dom';

// Importing the costume made components
import Button from './Button';

// Importing the style file
import '../css/Modal.css'

// Getting the div element, where the Modal component will be renderd
const modalScreen = document.getElementById('modal');


// Creating the Mondal compoment
const Modal = ({ setGameover, turn, setTurn, fields, setDraw, draw, singlePlayer, setSingleplayer}) => {

    const handleReplay = () => {
        singlePlayer ? setTurn(false) : setTurn(!turn);
        fields.forEach(field => {
            field.classList.remove('x');
            field.classList.remove('circle')
        })
        setGameover(false)
        setDraw(false);
    }

    const handleReset = () => {
        setTurn(false);
        setSingleplayer(true);
        fields.forEach(field => {
            field.classList.remove('x');
            field.classList.remove('circle')
        })
        setGameover(false);
        setDraw(false)
    }

    return ReactDOM.createPortal(
        <div className="modal-container">
            <div className="modal-body">
                <div className="modal-header">
                    <h1>{singlePlayer ? (turn ? "Better luck next time!" : "Congratulations!" ) : "Congratulations!"}</h1>
                </div>
                <hr />
                <div className="modal-content">
                    <h2>{draw ? "It's a Draw" : (turn ? "Player X has won!" : "Player O has won!")}</h2>
                    <div className="modal-buttons">
                        <Button text="Play again!" click={handleReplay} />
                        <Button link="/" text="Return to Menu" click={handleReset} />
                    </div>
                </div>
            </div>
        </div>,
        modalScreen
    )
}

export default Modal;