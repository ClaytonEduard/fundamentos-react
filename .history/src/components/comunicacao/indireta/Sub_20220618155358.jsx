import React from 'react';

export default (props) => {
    //Alterar informacao do Super atraves da funcao com o valor aleatorio random
    function acao() {
        props.onClicar(Math.random() * 100, 'Gerado');
    }
    return (
        <div>
            <button onClick={acao}>Alterar</button>
        </div>
    )


}