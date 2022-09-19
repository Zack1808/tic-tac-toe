import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Importing the costume made components
import Header from './Header';
import Menu from './Menu';

// Importing the style file
import '../css/App.css';
import Footer from './Footer';
import GameOptions from './GameOptions';

// Creating the App component
const App = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className="container dark">
                <Header />
                <Routes>
                    <Route path='/' exact element={<Menu />} />
                    <Route path='/game-options' element={<GameOptions />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
};

export default App;