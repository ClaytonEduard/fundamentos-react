import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

// importando a function
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro';

// iniciando a rederização 
ReactDOM.render(
    <div> 
    <Primeiro> </Primeiro>
    <ComParametro ></ComParametro>
    </div>,
    document.getElementById('root')
)