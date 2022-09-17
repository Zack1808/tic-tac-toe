import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Importing the costume made components
import Header from './Header';
import Menu from './Menu';

// Importing the style file
import '../css/App.css';

// Creating the App component
const App = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header />
            <Routes>
                <Route path='/' exact element={<Menu />} />
            </Routes>
        </BrowserRouter>
    )
};

export default App;