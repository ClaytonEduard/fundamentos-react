import React from 'react'
import Sub from './Sub'

export default (props) => {

    function quandoClicar(valorGerado, texto) {
        console.log('Acao')
        console.log(valorGerado)
        console.log(te)
    }
    return (
        <div>
            <h4>Valor </h4>
            <Sub onClicar={quandoClicar}></Sub>
        </div>
    );

};