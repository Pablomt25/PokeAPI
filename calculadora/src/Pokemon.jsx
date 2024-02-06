import React, { useState, useEffect } from "react";
let url;
function Pokemon() {

  const [listaPokemons, setListaPokemons] = useState([]);

  function cargarMas(){
    fetch(url)
      .then((response) => response.json())
      .then((datosPokemons) => {
        console.log(datosPokemons);
        url = datosPokemons.next;
        setListaPokemons([...listaPokemons, ...datosPokemons.results]);
      });
  }

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=8")
      .then((response) => response.json())
      .then((datosPokemons) => {
        console.log(datosPokemons);
        url = datosPokemons.next;
        setListaPokemons([...listaPokemons, ...datosPokemons.results]);
      });
  }, []);

  let lista = listaPokemons.map((nombre) => (
    <li key={nombre.name}>{nombre.name}</li>
  ));

  return (
    <>
      <h1>Componente lista pokemon</h1>
      <ul>{lista}</ul>
      <button onClick={cargarMas}>Cargar mas..</button>
    </>
  );
}

export default Pokemon;
