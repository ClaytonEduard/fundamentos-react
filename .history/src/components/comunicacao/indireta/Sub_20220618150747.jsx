import React from 'react';

export default (props) => {
    //Alterar informacao do Super atraves da funcao com o valor aleatorio random
    function () => {
        props.onClicar(Math.random() * 100);
    }
    return (
        <div>
            <button onClick={}>Alterar</button>
        </div>
    )


}