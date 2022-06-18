import React, { useState } from 'react';

// primeira funcao
export default (props) => {
    // 
    const [nome, alteraNome] = 'Draven'
    return (
        <>
            <input type="text" value={nome} />
        </>
    )
}
