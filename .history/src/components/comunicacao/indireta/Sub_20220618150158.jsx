import React from 'react';

export default (props) => {
    //Alterar informacao do Super atraves da funcao com o valor aleatorio random
    return (
        <div>
            <button onClick={() => {
                props.onClicar(Math.random() * 100);
            }}>Alterar</button>
        </div>
    )


}