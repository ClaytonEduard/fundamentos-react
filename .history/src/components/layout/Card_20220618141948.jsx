import './Card.css'
import React from 'react'

// componete baseado em funcao
export default props =>
    // aplicando class CSS, no caso do React não se usa a class
    <div className="Card">
        <div className='Content'>
            {props.children}
        </div>
        <div className='Footer' style={backgroundColor}:>
            {props.titulo}
        </div>
    </div>