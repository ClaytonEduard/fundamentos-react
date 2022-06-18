import React from 'react'
export default props => {
    //verificacao condicional
    return (
        <div>
            <h2>O número é {props.numero}</h2>
            {/* se o resto da divisao do numero for 0 é (codincao ? para verdadeiro) par,
             (condicao : para false)senão e impar*/}
            {props.numero % 2 === 0 
                ?
                <span>Par</span>
                :
                <span>Impar</span>}
        </div>
    )
}