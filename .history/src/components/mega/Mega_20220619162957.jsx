/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";

export default (props) => {
    const [numeros, setNumeros] = useState(Array(props.qtdNumero).fill(0))
    return (
        <>
            <h3>Mega</h3>
            <h4>{numeros.join(' ')}</h4>
        </>
    );
}