import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Importing the costume made components
import Header from './Header';
import Menu from './Menu';

// Importing the style file
import '../css/App.css';
import Footer from './Footer';
import GameOptions from './GameOptions';
import GameBoard from './GameBoard';

// Creating the App component
const App = () => {

    const [dark, setDark] = useState(false);
    const [singlePlayer, setSinglePlayer] = useState(null);

    // Setting the dark mode status to the previous state before refreshing
    useEffect(() => {
        let darkMode = localStorage.getItem('ttt-dark-mode');
        if(darkMode) {
            darkMode = JSON.parse(darkMode);
            setDark(darkMode);
        }
    }, [])

    // Storing the dark mode state, so that the app stays in which ever mode the user left it afer refreshing
    useEffect(() => {
        localStorage.setItem('ttt-dark-mode', JSON.stringify(dark));
    }, [dark])

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className={`container ${dark && "dark"}`}>
                <Header />
                <Routes>
                    <Route path='/' exact element={<Menu toggleDark={setDark} dark={dark} setSinglePlayer={setSinglePlayer} />} />
                    <Route path='/game-options' element={<GameOptions />} />
                    <Route path='/gameboard' element={<GameBoard />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
};

export default App;