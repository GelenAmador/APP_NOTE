import React from 'react';
import ReactDOM from 'react-dom/client'; // Cambiado para usar createRoot
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
