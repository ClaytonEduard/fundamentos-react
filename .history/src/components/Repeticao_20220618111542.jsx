import React from 'react'

// importando dados do vetor
import produtos from '../data/produtos'

export default props => {
    // funcao para retornar os liis

    function getProdutosListItem() {
        // usar 
        return produtos.map(prod => {
            return <li key={prod.id}>
                {prod.id} - {prod.nome} = R$ {prod.preco}
            </li>
        })
    }
    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutosListItem()}
            </ul>
        </div>
    )

}