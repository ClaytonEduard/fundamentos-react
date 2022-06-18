import React from 'react'
import Sub from './s
export default props =>
    <div>
        <Filho {...props}><strong>Francisco</strong></Filho>
        <Filho sobrenome={props.sobrenome}><strong>Beatriz</strong></Filho>
        <Filho sobrenome='Beckham'><strong>Henry</strong></Filho>
    </div>