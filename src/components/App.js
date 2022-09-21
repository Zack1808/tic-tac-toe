import React, { useState } from 'react';
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

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className={`container ${dark && "dark"}`}>
                <Header />
                <Routes>
                    <Route path='/' exact element={<Menu toggleDark={setDark} dark={dark} />} />
                    <Route path='/game-options' element={<GameOptions />} />
                    <Route path='/gameboard' element={<GameBoard />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
};

export default App;