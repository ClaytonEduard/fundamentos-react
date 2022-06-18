import React from 'react'

// importando dados do vetor
import produtos from '../data/produtos'

export default props => {
    // funcao para retornar os liis
    function getProdutosListItem(){
        return produtos.map()
    }
    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                <li></li>
            </ul>
        </div>
    )

}