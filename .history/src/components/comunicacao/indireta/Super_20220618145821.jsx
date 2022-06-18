import React from 'react'
import Sub from './Sub'

export default (props) => {

    function quandoClicar() {
        console.log('Acao')
    }
    return (
        <div>
            <h4>Valor </h4>
            <Sub on={quandoClicar}></Sub>
        </div>
    );

};