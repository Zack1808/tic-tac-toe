import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing the App component 
import App from './components/App';

// Getting the root component
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the App component to root div
root.render(<App />);