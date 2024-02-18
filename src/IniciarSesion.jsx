import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import firebase from '../firebase';
import './iniciarsesion.css'
import google from './assets/google.jpg'
import github from './assets/github.png'

const IniciarSesion = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignIn, setIsSignIn] = useState(true);



  function iniciarSesionConGoogle() {
    const provider = new GoogleAuthProvider();
      const result = signInWithPopup(auth, provider);
      const user = result.user;
      usuario.value = user.displayName;
      router.push('/jugar');
    
  }

  const iniciarSesionConGithub = async () => {
    const provider = new GithubAuthProvider();
    
      const result = signInWithPopup(auth, provider);
      const user = result.user;
      usuario.value = user.displayName;
      router.push('/jugar');
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };



  const handleRedirectToRegister = () => {
    navigate("/registrarse");
  };

  return (
    <>
      <h2 className="titulo2">Iniciar Sesión</h2>
      <form>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </label>
        <br />
        <button type="submit" className="enviar">Iniciar Sesión</button><br />
        <button className="google" onClick={iniciarSesionConGoogle}><img src={google} className="logo" /></button>
        <button className="github" onClick={iniciarSesionConGithub}><img src={github} className="logo" /></button>
        <button onClick={handleRedirectToRegister} type="submit" className="cuenta">¿No tienes cuenta? Regístrate</button>
      </form>

    </>
  );
};

export default IniciarSesion;
