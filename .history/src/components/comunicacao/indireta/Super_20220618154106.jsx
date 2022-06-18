import React, { useState } from 'react'
import Sub from './Sub'

export default (props) => {
    const [nun, setNun] = useState(0)

    function quandoClicar(valorGerado, texto) {
        console.log('Acao')
        console.log(valorGerado)
        console.log(texto)
        alert(valorGerado)
    }
    return (
        <div>
            <h4>Valor:{nu} </h4>
            <Sub onClicar={quandoClicar}></Sub>
        </div>
    );

};