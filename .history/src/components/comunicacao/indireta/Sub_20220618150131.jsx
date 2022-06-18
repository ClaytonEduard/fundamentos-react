import React from 'react';

export default (props) => {
    //Alterar informacao do Super 
    return (
        <div>
            <button onClick={() => {
                props.onClicar(Math.random() * 100);
            }}>Alterar</button>
        </div>
    )


}