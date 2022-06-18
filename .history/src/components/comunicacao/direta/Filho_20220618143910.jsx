import React from 'react';

export default props =>
    <div>
        <h3>Componete Filho</h3>
        <h>{props.children} - {props.sobrenome}</h4>
    </div>