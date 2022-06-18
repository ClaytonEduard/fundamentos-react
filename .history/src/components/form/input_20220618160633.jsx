import React, { useState } from 'react';

// primeira funcao
export default (props) => {
    let nome = 'Draven'
    return (
        <>
            <input type="text" value={nome} />
        </>
    )
}
