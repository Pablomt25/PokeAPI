import React, { useState } from 'react';

function Comp({param, param2=0}) {
    let contenido;
    let valor = true;

    let nombres = ["jose", "lucia", "pablo"];
    let lista = nombres.map(nombre => (
        <li key={nombre} onClick={() => trataClick(nombre)}>{nombre}</li>
    ));

    const [titulo, setTitulo] = useState("Cargando contenido de título");

    function trataClick(e) {
        setTitulo("Has hecho click en " + e);
    }

    if (valor) {
        contenido = <h2>Entro en if</h2>;
    } else {
        contenido = <h2>Entro en else</h2>;
    }


    return (
        <>
            <h1>Primer componente</h1>
            <h2>{titulo}</h2>
            <h4>Recibe como param = {param}</h4>
            <h4>Recibe como param = {param2}</h4>

            <button onClick={() => trataClick("Botón")}>
                Hazme click
            </button>


            {contenido}

            {
                valor ? <h1>Valor es true</h1> : <h1>Valor es false</h1>
            }

            <ul>
                {lista}
            </ul>
        </>
    );
}

export default Comp;
