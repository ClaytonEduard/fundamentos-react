import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

// importando a function
import Primeiro from './components/Primeiro'
import './'

// iniciando a rederização 
ReactDOM.render(
    // usando a funcao 
    <Primeiro> </Primeiro>
    ,
    document.getElementById('root')
)