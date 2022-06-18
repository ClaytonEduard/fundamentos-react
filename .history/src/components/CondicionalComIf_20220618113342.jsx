import React from 'react'
import If from './components/If';
export default props => {
    //verificacao condicional
    return (
        <div>
            <h2>O número é {props.numero}</h2>
            <If test = {}
            {
                ?
                <span>Par</span>
                :
                <span>Impar</span>}
        </div>
    )
}