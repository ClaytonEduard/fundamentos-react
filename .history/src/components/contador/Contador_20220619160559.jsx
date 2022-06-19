import './Contador.css'
import React, { Component } from 'react'

import Display from './Display'
import PassoForm from './PassoForm'

export default class Contador extends Component {

    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0,
    }
    incremento = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }
    decremento = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    mudarPasso(novoPasso)=>{

    }
    render() {
        return (
            <div className='Contador'>
                <h2>Contador</h2>
                <PassoForm passo={this.state.passo} onPassoChange={} /></PassoForm>
                <Display>   </Display>
                <div>
                    <button onClick={this.incremento}>+</button>
                    <button onClick={this.decremento}>-</button>
                </div>
            </div>
        )
    }
}