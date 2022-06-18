import React from 'react';

export default (props) => {
    //Alterar informacao do Super atraves da fu
    return (
        <div>
            <button onClick={() => {
                props.onClicar(Math.random() * 100);
            }}>Alterar</button>
        </div>
    )


}