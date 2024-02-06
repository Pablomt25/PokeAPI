import React from 'react';

function Boton({ handleNumberClick, handleOperatorClick, handleEqualsClick, handleClearClick }) {
    return (
        <table className="tabla">
            <tbody>
                <tr>
                    <td onClick={() => handleClearClick()}>C</td>
                    <td>+/-</td>
                    <td>%</td>
                    <td onClick={() => handleOperatorClick('/')}>/</td>
                </tr>
                <tr>
                    <td onClick={() => handleNumberClick('7')}>7</td>
                    <td onClick={() => handleNumberClick('8')}>8</td>
                    <td onClick={() => handleNumberClick('9')}>9</td>
                    <td onClick={() => handleOperatorClick('*')}>X</td>
                </tr>
                <tr>
                    <td onClick={() => handleNumberClick('4')}>4</td>
                    <td onClick={() => handleNumberClick('5')}>5</td>
                    <td onClick={() => handleNumberClick('6')}>6</td>
                    <td onClick={() => handleOperatorClick('-')}>-</td>
                </tr>
                <tr>
                    <td onClick={() => handleNumberClick('1')}>1</td>
                    <td onClick={() => handleNumberClick('2')}>2</td>
                    <td onClick={() => handleNumberClick('3')}>3</td>
                    <td onClick={() => handleOperatorClick('+')}>+</td>
                </tr>
                <tr>
                    <td onClick={() => handleNumberClick('0')}>0</td>
                    <td></td>
                    <td onClick={() => handleNumberClick('.')}>.</td>
                    <td onClick={() => handleEqualsClick()}>=</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Boton;
