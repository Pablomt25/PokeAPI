import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './detalle.css';
import { Link } from "react-router-dom";


function Detalle() {
  const { nombrePokemon } = useParams();
  const [detallesPokemon, setDetallesPokemon] = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
      .then((response) => response.json())
      .then((detalle) => {
        setDetallesPokemon(detalle);
      });
  }, [nombrePokemon]);

  return (
    <>
      <div className="container">
        <h2 className="titulo">Detalles de {nombrePokemon}</h2>
        <div className="details-section">
          <img src={detallesPokemon.sprites?.front_default} alt={nombrePokemon} />
          <p><b>Nombre:</b> {detallesPokemon.name}</p>
          <p><b>Altura:</b> {detallesPokemon.height}</p>
          <p><b>Peso:</b> {detallesPokemon.weight}</p>
          <p><b>Tipo(s):</b> {detallesPokemon.types && detallesPokemon.types.map(type => type.type.name).join(', ')}</p>
          <p><b>Habilidades:</b> {detallesPokemon.abilities && detallesPokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>


        </div>
      </div>
      <Link to="/pokemon" className="link-volver">Volver</Link>

    </>

  );
}

export default Detalle;
