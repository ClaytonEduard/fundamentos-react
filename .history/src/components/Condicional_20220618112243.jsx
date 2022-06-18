import React from 'react'
export default props => {
//verificacao condi
    return (
        <div>
            <h2>O número é {props.numero}</h2>
            
            <span>Par</span>
            <span>Impar</span>
        </div>
    )
}