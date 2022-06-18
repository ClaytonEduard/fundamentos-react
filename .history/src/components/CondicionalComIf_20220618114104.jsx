import React from 'react'
import If from './If';
export default props => {
    //verificacao condicional
    return (
        <div>
            <h2>O número é {props.numero}</h2>
            verificao como funcao externa, com sintaxe esx <
            <If test={props.numero % 2 === 0}>
                <span>Par</span>
            </If>
            <If test={props.numero % 2 === 1}>
                <span>Impar</span>
            </If>

        </div>
    )
}