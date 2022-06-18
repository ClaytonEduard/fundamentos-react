import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

// importando a function
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro';
import ComFilhos from './components/ComFilhos';


// iniciando a rederização 
ReactDOM.render(
    <div>
        {/* <Primeiro />
        <ComParametro titulo="Esse é o titulo" subtitulo="subtitulo" /> */}
        <ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Bia</li>
                <li>Ana</li>
                <li>Ana</li>
            </ul>
        </ComFilhos>
    </div>,
    document.getElementById('root')
)