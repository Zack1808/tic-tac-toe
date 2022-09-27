import React from 'react';
import ReactDOM from 'react-dom';

// Importing the costume made components
import Button from './Button';

// Importing the style file
import '../css/Modal.css'

// Getting the div element, where the Modal component will be renderd
const modalScreen = document.getElementById('modal');


// Creating the Mondal compoment
const Modal = ({ turn, draw, singlePlayer, restart}) => {

    return ReactDOM.createPortal(
        <div className="modal-container">
            <div className="modal-body">
                <div className="modal-header">
                    <h1>{singlePlayer ? (turn === "circle" ? "Better luck next time!" : "Congratulations!" ) : "Congratulations!"}</h1>
                </div>
                <hr />
                <div className="modal-content">
                    <h2>{draw ? "It's a Draw" : (turn === "x" ? "Player X has won!" : "Player O has won!")}</h2>
                    <div className="modal-buttons">
                        <Button text="Play again!" click={restart} />
                        <Button link="/" text="Return to Menu" click={restart} />
                    </div>
                </div>
            </div>
        </div>,
        modalScreen
    )
}

export default Modal;