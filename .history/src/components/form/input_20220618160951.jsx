import React, { useState } from 'react';

// primeira funcao
export default (props) => {
    // constante que define o nome e a propriendade que permite mudar os dados value da variavel'
    // readOnly siguini
    const [nome, alteraNome] = useState('Draven')
    return (
        <>
            <input type="text" value={nome} readOnly />
        </>
    )
}
