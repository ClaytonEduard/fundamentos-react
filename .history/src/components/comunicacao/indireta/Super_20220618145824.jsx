import React from 'react'
import Sub from './Sub'

export default (props) => {

    function quandoClicar() {
        console.log('Acao')
    }
    return (
        <div>
            <h4>Valor </h4>
            <Sub onClik={quandoClicar}></Sub>
        </div>
    );

};