import React from 'react';
import { Link } from "react-router-dom";

function Navegacion({ handleLogout }) {
  return (
    <nav>
      <Link to="/" className="nav-link">Inicio</Link>
      <Link to="/pokemon" className="nav-link">Lista Pokemons</Link>
      <Link to="/jugar" className="nav-link">Jugar</Link>
      <Link to="/iniciarSesion" className="nav-link">Iniciar Sesion</Link>
      <Link to="/registrarse" className="nav-link">Registrarse</Link>

    </nav>
  );
}

export default Navegacion;