import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './pokemon.css';

function Pokemon() {
  const [listaPokemons, setListaPokemons] = useState([]);
  const [detallesPokemon, setDetallesPokemon] = useState({});
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");  

  function cargarDetallesPokemon(url) {
    fetch(url)
      .then((response) => response.json())
      .then((detalle) => {
        setDetallesPokemon(detalle);
      });
  }

  function cargarMas() {
    if (!loading && url) {
      setLoading(true);
      fetch(url)
        .then((response) => response.json())
        .then((datosPokemons) => {
          console.log(datosPokemons);
          setUrl(datosPokemons.next); 
          setListaPokemons([...listaPokemons, ...datosPokemons.results]);
          setLoading(false);
        });
    }
  }

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=8")
      .then((response) => response.json())
      .then((datosPokemons) => {
        console.log(datosPokemons);
        setUrl(datosPokemons.next);
        setListaPokemons([...listaPokemons, ...datosPokemons.results]);
      });
  }, []);

  useEffect(() => {
    if (detallesPokemon.url) {
      cargarDetallesPokemon(detallesPokemon.url);
    }
  }, [detallesPokemon]);

  const lista = listaPokemons.map((pokemon) => (
    <li key={pokemon.name} className="pokemon-item">
      <h2>{pokemon.name}</h2>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split("/")[6]}.png`}
        alt={pokemon.name}
      />
      <Link to={`/detalle/${pokemon.name}`}><button>Saber más</button></Link>
    </li>
  ));

  return (
    <>
      <h1 className="titulo2">Lista de pokemons</h1>
      <ul className="pokemon-list">{lista}</ul>
      <button className="cargarMas" onClick={cargarMas}>Cargar más...</button>
    </>
  );
}

export default Pokemon;
