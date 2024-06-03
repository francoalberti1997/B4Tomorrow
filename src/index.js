import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from "../src/navbar/Navbar.jsx"
import Home from "../src/home/Home.jsx"
import "../src/Animacion-dna.css"
import "../src/home.css"
import Owners from './owners/Owners.jsx';
import './owners/style.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    <Owners/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
