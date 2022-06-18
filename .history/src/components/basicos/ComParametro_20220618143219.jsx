import React from 'react'
export default (props) => {
   // proos é somente leitura!
   // pro  
    <>
        <h3>{props.titulo}</h3>
        <p>{props.subtitulo}</p>
        <p>{Array(10).fill(2)}</p>
    </>
}