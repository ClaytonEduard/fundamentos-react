import React, { Component } from 'react'

export default class Contador extends Component {

    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0,
    }
    incremento = () => {
        this.setState({ valor: this.state.valor + 1 })
    }
    decremento = () => {
        this.setState({ valor: this.state.valor - 1 })
    }

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <h4>Passo: {this.state.passo}</h4>
                <h4>Valor: {this.state.valor}</h4>
                <div>
                    <button onclick={this.incremento}>+</button>
                    <button onclick={this.decremento}>-</button>
                </div>
            </div>
        )
    }
}