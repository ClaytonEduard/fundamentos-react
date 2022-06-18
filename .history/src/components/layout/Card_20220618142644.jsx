import './Card.css'
import React from 'react'

// componete baseado em funcao
export default props =>
    // aplicando class CSS, no caso do React não se usa a class
    <div className="Card" style={{
        borderColor: props.color || '#000'
         }}>
        <div className='Content'>
            {props.children}
        </div>
        <div className="Footer" style={{
            backgroundColor: props.color || '#000'
        }}>
            {props.titulo}
        </div>
    </div>