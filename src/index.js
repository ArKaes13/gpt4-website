require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import './styles.css';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
    <App />
)