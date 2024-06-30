import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from "../src/navbar/Navbar.jsx";
import Home from "../src/home/Home.jsx";
import "../src/Animacion-dna.css";
import "../src/home.css";
import Owners from './owners/Owners.jsx';
import './owners/style.css';
import Preloader from './preloader/Preloader.jsx';
import "./home/particles.css"
import Particles from './home/Particles.jsx';

const App = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 3000); // 5 segundos

    return () => clearTimeout(timer); // Limpia el temporizador en desmontaje
  }, []);


  return (
    <>
      {/* {showPreloader ? (
        <Preloader />
      ) : ( */}
        <>
        
          <Home />
          <Particles/>
          {/* <Owners /> */}
        </>
      {/* )} */}

    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);