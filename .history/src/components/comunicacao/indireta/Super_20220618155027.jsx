import React, { useState } from 'react'
import Sub from './Sub'

export default (props) => {
    const [txt, setTxt] = useState(0)
    const [nun, setNun] = useState(0)

    function quandoClicar(valorGerado, texto) {
        setNun(valorGerado)
        setTxt(texto)
        //alert(valorGerado)
    }
    return (
        <div>
            <h4>{}Valor: {nun} </h4>
            <Sub onClicar={quandoClicar}></Sub>
        </div>
    );

};