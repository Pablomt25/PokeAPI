import React, { useState, useEffect, useCallback } from "react";
import './jugar.css'

function Jugar() {
  const [vidas, setVidas] = useState(5);
  const [pokemonActual, setPokemonActual] = useState({});
  const [letrasAdivinadas, setLetrasAdivinadas] = useState(new Set());
  const [palabraAdivinada, setPalabraAdivinada] = useState([]);
  const [mensaje, setMensaje] = useState("");

  const obtenerPalabraSecreta = useCallback(async () => {
    
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1000");
      const data = await response.json();
      const randomPokemon = data.results[Math.floor(Math.random() * data.results.length)];

      const pokemonResponse = await fetch(randomPokemon.url);
      const pokemonData = await pokemonResponse.json();

      setPokemonActual({
        id: pokemonData.id,
        name: pokemonData.name,
      });

      const palabraInicial = Array.from(pokemonData.name).map(letra => (letra === " " ? " " : "_"));
      setPalabraAdivinada(palabraInicial);
      setLetrasAdivinadas(new Set());
      setMensaje("");
  }, []);

  const manejarIntento = useCallback(letra => {
    letra = letra.toLowerCase();


    setLetrasAdivinadas(prevLetras => new Set([...prevLetras, letra]));

    if (pokemonActual.name.toLowerCase().includes(letra)) {
      const nuevaPalabraAdivinada = palabraAdivinada.map((letraActual, index) =>
        pokemonActual.name.toLowerCase()[index] === letra ? letra : letraActual
      );
      setPalabraAdivinada(nuevaPalabraAdivinada);
      setMensaje("¡Letra Correcta!");
    } else {
      setVidas(prevVidas => prevVidas - 1);
      setMensaje("¡Incorrecto! Pierdes una vida.");
    }
  }, [letrasAdivinadas, palabraAdivinada, pokemonActual]);

  useEffect(() => {
    obtenerPalabraSecreta();
  }, [obtenerPalabraSecreta]);

  useEffect(() => {
    if (palabraAdivinada.every(letra => letra !== "_")) {
      setMensaje("¡Felicidades! Adivinaste el Pokémon.");
    }
  }, [palabraAdivinada, vidas, pokemonActual, obtenerPalabraSecreta]);

  const nuevoPokemon = () => {
    obtenerPalabraSecreta();
    setVidas(5);
  };

  return (
    <div className="container">
      <h1 className="titulo">Juego del Ahorcado Pokémon</h1>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonActual.id}.png`}
        alt={pokemonActual.name}
      />
      <p>Vidas: {vidas}</p>
      <p>{mensaje}</p>
      <p>
        {palabraAdivinada.map((letra, index) => (
          <span key={index}>{letra} </span>
        ))}
      </p>
      <div>
        {Array.from("abcdefghijklmnopqrstuvwxyz").map(letra => (
          <button key={letra} onClick={() => manejarIntento(letra)} disabled={letrasAdivinadas.has(letra)}>
            {letra}
          </button>
        ))}
      </div>
      <button className="nuevo" onClick={nuevoPokemon}>Nuevo Pokémon</button>
    </div>
  );
}

export default Jugar;
