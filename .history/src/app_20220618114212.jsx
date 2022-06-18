import './App.css';
import React from 'react';

// importando a function
import Primeiro from './components/Primeiro';
import ComParametro from './components/ComParametro';
import ComFilhos from './components/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from './components/Repeticao';
import Condicional from './components/Condicional';
import CondicionalComIf from './components/CondicionalComIf';


export default (props) => (
    <div className='App'>
        <Card titulo='#06 - Condicional Versão 2 verificação como funcao externa, com sintaxe esx'>
            <CondicionalComIf numero={11}></CondicionalComIf>
        </Card>
        <Card titulo='#05 - Condicional Versão 1'>
            <Condicional numero={10}></Condicional>
        </Card>
        <Card titulo='#04 - Componente com Função Repetição'>
            <Repeticao></Repeticao>
        </Card>
        <Card titulo='#03 - Componente com Filhos'>
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo='#02 - Componente com Paramentro'>
            <ComParametro titulo="Esse é o titulo" subtitulo="subtitulo" />
        </Card>
        <Card titulo='#01 - Primeiro Componente'>
            <Primeiro />
        </Card>
    </div>
);