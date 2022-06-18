import './App.css';
import React from 'react';

// importando a function
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import ComFilhos from './components/basicos/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf';

export default (props) => (
    <div className='App'>
        <Card titulo='#01 - Primeiro Componente'
            color='#E94C6F'>
            <Primeiro />
        </Card>
        <Card titulo='#02 - Componente com paramentro Array(10) de elementos com propriedade repetição .fil(2)'
            color='#E94C6F'>
            <ComParametro titulo="Esse é o titulo" subtitulo="subtitulo" />
        </Card>
        <Card titulo='#03 - Componente com Filhos'
            color='#E94C6F'>
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo='#04 - Componente com Função Repetição'
            color='#008BA'>
            <Repeticao></Repeticao>
        </Card>
        <Card titulo='#05 - Condicional Versão 1'
            color='#E94C6F'>
            <Condicional numero={10}></Condicional>
        </Card>
        <Card titulo='#06 - Condicional Versão 2 verificação como função externa, com sintaxe JSX' color="#FA6900">
            <CondicionalComIf numero={11}></CondicionalComIf>
        </Card>
    </div>
);