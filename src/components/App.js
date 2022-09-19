import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Importing the costume made components
import Header from './Header';
import Menu from './Menu';

// Importing the style file
import '../css/App.css';
import Footer from './Footer';

// Creating the App component
const App = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className="container">
                <Header />
                <Routes>
                    <Route path='/' exact element={<Menu />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
};

export default App;