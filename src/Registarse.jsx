import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Registrarse = () => {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Registro exitoso
      setSuccessMessage("¡Registro exitoso! Ahora puedes iniciar sesión.");
      // Limpiar campos
      setEmail("");
      setPassword("");
      setError(null);

    } catch (error) {
      setError(error.message);
      setSuccessMessage("");
    }
  };

  return (
    <>
      <h2 className="titulo2">Registrarse</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} required />
        </label>
        <br />
        <label>
          Contraseña:
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </label>
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        <button type="submit">Registrarse</button>
      </form>
    </>
  );
};

export default Registrarse;
