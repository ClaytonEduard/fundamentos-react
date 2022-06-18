import React from 'react';
import Filho from './Filho';
export default props =>
    <div>
        <Filho {...props}><strong>Francisco</strong></Filho>
        <Filho sobrenome={props.sobrenome}><strong>Beatriz</strong></Filho>
        <Filho sobrenome='Beckham'><strong>Henry</strong></Filho>
    </div>