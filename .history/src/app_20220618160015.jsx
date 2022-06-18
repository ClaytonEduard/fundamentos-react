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
import Pai from './components/comunicacao/direta/Pai';
import Super from './components/comunicacao/indireta/Super';
import Input from './components/form/input';

export default (props) => (
    <div className='App'>
        <Card titulo='#01 - Primeiro Componente'
            color='#92b06a'>
            <Primeiro />
        </Card>
        <Card titulo='#02 - Componente com paramentro Array(10) de elementos com propriedade repetição .fil(2)'
            color='#ff85cb'>
            <ComParametro titulo="Esse é o titulo" subtitulo="subtitulo" />
        </Card>
        <Card titulo='#03 - Componente com Filhos'
            color='#D96459'>
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
            color='#008BBA'>
            <Repeticao></Repeticao>
        </Card>
        <Card titulo='#05 - Condicional Versão 1'
            color='#E94C6F'>
            <Condicional numero={10}></Condicional>
        </Card>
        <Card titulo='#06 - Condicional Versão 2 verificação como função externa, com sintaxe JSX' color="#FA6900">
            <CondicionalComIf numero={11}></CondicionalComIf>
        </Card>
        <Card titulo='#07 - Comunicação direta' color="#429BB5">
            <Pai sobrenome='Croft'></Pai>
        </Card>
        <Card titulo='#08 - Comunicação indireta' color="#000">
            <Super></Super>
        </Card>
        <Card titulo='#089- Comunicação indireta' color="#000">
            <Super></Super>
        </Card>

    </div>
);