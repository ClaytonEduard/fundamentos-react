import React from 'react'
export default props => {
//verificacao condicional
    return (
        <div>
            <h2>O número é {props.numero}</h2>
            {props.numeo}
            <span>Par</span>
            <span>Impar</span>
        </div>
    )
}