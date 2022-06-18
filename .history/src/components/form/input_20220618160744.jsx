import React, { useState } from 'react';

// primeira funcao
export default (props) => {
    // constante que define o nome e a propriendade que ira possibi
    const [nome, alteraNome] = 'Draven'
    return (
        <>
            <input type="text" value={nome} />
        </>
    )
}
