import './'
import React from 'react'

// importando a function
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro';
import ComFilhos from './components/ComFilhos';
import Card from './components/layout/Card';


export default (props) => (
    <div className='App'>
        <Card titulo='Primeiro Componente'>
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

    </div>
);