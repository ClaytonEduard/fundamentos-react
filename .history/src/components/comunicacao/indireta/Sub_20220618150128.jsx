import React from 'react';

export default (props) => {
    //Alterar informacao do Super 
    return (
        <div>
            <button onClick={() => {
                props.onClicar(Ma);
            }}>Alterar</button>
        </div>
    )


}