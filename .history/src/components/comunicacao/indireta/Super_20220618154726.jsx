import React, { useState } from 'react'
import Sub from './Sub'

export default (props) => {
    const [nun, setNun] = useState(0)

    function quandoClicar(valorGerado, texto) {
         setNun(valorGerado)
        alert(valorGerado)
    }
    return (
        <div>
            <h4>Valor:{nun} </h4>
            <Sub onClicar={quandoClicar}></Sub>
        </div>
    );

};