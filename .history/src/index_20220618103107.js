import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

// importando a function
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro';
import ComFilhos from './components/ComFilhos';
import Card from './components/layout/Card';

// iniciando a rederização 
ReactDOM.render(
    <div>
        <Card titulo='Primeiro Componete'>
        <Primeiro />
        </Card>
        <Card titulo='Exercício X'>
            Conteudo
        </Card>
        {/* <ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Bia</li>
                <li>Carlos</li>
                <li>Daniel</li>
            </ul>
        </ComFilhos> */}

        {/* <Primeiro />
        <ComParametro titulo="Esse é o titulo" subtitulo="subtitulo" /> */}

    </div>,
    document.getElementById('root')
)