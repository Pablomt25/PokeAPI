import React, { useState } from 'react';
import Boton from './Boton';

function Calculadora() {
  const [valorDisplay, setValorDisplay] = useState('0');
  const [operador, setOperador] = useState(null);
  const [valorPrevio, setValorPrevio] = useState(null);

  const manejarClickNumero = (numero) => {
    setValorDisplay((valorPrevio) => (valorPrevio === '0' ? numero : valorPrevio + numero));
  };

  const manejarClickOperador = (siguienteOperador) => {
    if (operador && valorPrevio !== null) {
      calcular();
    } else {
      setValorPrevio(parseFloat(valorDisplay));
    }

    setOperador(siguienteOperador);
    setValorDisplay('0');
  };

  const manejarClickIgual = () => {
    calcular();
    setOperador(null);
  };

  const manejarClickLimpiar = () => {
    setValorDisplay('0');
    setOperador(null);
    setValorPrevio(null);
  };

  const calcular = () => {
    const valorActual = parseFloat(valorDisplay);

    switch (operador) {
      case '+':
        setValorDisplay(valorPrevio + valorActual);
        break;
      case '-':
        setValorDisplay(valorPrevio - valorActual);
        break;
      case '*':
        setValorDisplay(valorPrevio * valorActual);
        break;
      case '/':
        setValorDisplay(valorPrevio / valorActual);
        break;
      default:
        break;
    }

    setValorPrevio(null);
  };

  return (
    <div className="calculadora">
      <div className="display">{valorDisplay}</div>
      <Boton
        handleNumberClick={manejarClickNumero}
        handleOperatorClick={manejarClickOperador}
        handleEqualsClick={manejarClickIgual}
        handleClearClick={manejarClickLimpiar}
      />
    </div>
  );
}

export default Calculadora;