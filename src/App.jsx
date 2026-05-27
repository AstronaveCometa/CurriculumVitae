import React from 'react';
import Navbar from './components/Navbar';
import Presentacion from './components/Presentacion';
import Portafolio from './components/Portafolio';
import Estudios from './components/Estudios';
import Experiencia from './components/Experiencia';
import Contacto from './components/Contacto';
import './App.css'; 

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Presentacion />
        <hr />
        <Portafolio />
        <hr />
        <Estudios />
        <hr />
        <Experiencia />
        <hr />
      </main>
      <Contacto />
    </div>
  );
}

export default App;