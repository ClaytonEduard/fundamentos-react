import React, { useState } from 'react';

// primeira funcao
export default (props) => {
    // constante que define o nome 
    const [nome, alteraNome] = 'Draven'
    return (
        <>
            <input type="text" value={nome} />
        </>
    )
}
