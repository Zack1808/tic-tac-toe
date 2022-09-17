import React from 'react';
import { BrowserRouter } from 'react-router-dom'

// Importing the costume made components
import Header from './Header';

// Importing the style file
import '../css/App.css';

// Creating the App component
const App = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header />
        </BrowserRouter>
    )
};

export default App;