/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default (props) => {
    const [numeros, setNumeros] = useState(Array(props.qtdNumero).fill(0))
    return (
        <>
            <h4>Valor:{props.valor}</h4>
        </>
    );
}