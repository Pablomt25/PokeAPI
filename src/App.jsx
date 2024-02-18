import { useState } from 'react'
import reactLogo from './assets/react.svg'
import imagenLanding from './assets/landing.jpeg'
import './App.css'
import Pokemon from './pokemon'


function App() {


  return (
    <div className="landing-container">
      <header>
        <h1>Bienvenido a Poke-API</h1>
      </header>
      <section className="content">
      <img src={imagenLanding} className="logo" alt="Vite logo" />
        <p>Explora el mundo de los Pokémons con Poke-API.</p>
      </section>
      <footer>
        <p>© 2024 Poke-API. Todos los derechos reservados. Pablo Moreno Tirado.</p>
      </footer>
    </div>
  );
}

export default App;
