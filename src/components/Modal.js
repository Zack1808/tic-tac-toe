import React from 'react';
import ReactDOM from 'react-dom';

// Importing the costume made components
import Button from './Button';

// Importing the style file
import '../css/Modal.css'

// Getting the div element, where the Modal component will be renderd
const modalScreen = document.getElementById('modal');


// Creating the Mondal compoment
const Modal = () => {

    const handleReplay = () => {

    }

    const handleReset = () => {

    }

    return ReactDOM.createPortal(
        <div className="modal-container">
            <div className="modal-body">
                <div className="modal-header">
                    <h1>Congratulations!</h1>
                </div>
                <hr />
                <div className="modal-content">
                    <h2>Player X has won!</h2>
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