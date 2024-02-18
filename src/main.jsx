import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Detalle from './Detalle.jsx'

import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Pokemon from './pokemon.jsx';
import Navegacion from './navegacion.jsx';
import Jugar from './Jugar.jsx'
import IniciarSesion from './IniciarSesion.jsx'
import Registrarse from './Registarse.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element:
      <>
        <Navegacion></Navegacion>
        <App></App>
      </>,
    errorElement: <h1>Ruta no valida</h1>
  },
  {
    path: "pokemon",
    element:
      <>
        <Navegacion></Navegacion>
        <Pokemon></Pokemon>
      </>
  },
  {
    path: "jugar",
    element:
      <>
        <Navegacion></Navegacion>
        <Jugar></Jugar>
      </>
  },
  {
    path: "iniciarSesion",
    element:
      <>
        <Navegacion></Navegacion>
        <IniciarSesion></IniciarSesion>
      </>
  },
  {
    path: "registrarse",
    element:
      <>
        <Navegacion></Navegacion>
        <Registrarse></Registrarse>
      </>
  },
  {
    path: "detalle/:nombrePokemon",
    element:
      <>
        <Navegacion />
        <Detalle />
      </>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
