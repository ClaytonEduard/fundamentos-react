/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";

export default (props) => {
    const [numeros, setNumeros] = useState(Array(props.qtdNumero).fill(0))

    function gerarNumerosNaoContido(array) {
        const max = 60
        const min = 1
        const nun = parseInt(Math.random() * (max - min)) + min;

        return array.includes(nun) ? gerarNumerosNaoContido(array) : nun;

    }


    function gerarNum() {
        const novoArray = Array(props.qtdNumero)
            .fill(0)
            .reduce(a => [...a, gerarNumerosNaoContido(a)], []).sort((a, b) => a - b)
        setNumeros([1, 2, 3, 4, 5, 6, 7, 8])
    }
    return (
        <>
            <h3>Mega</h3>
            <h4>{numeros.join(' ')}</h4>
            <button onClick={gerarNum}>Gerar</button>
        </>
    );
}