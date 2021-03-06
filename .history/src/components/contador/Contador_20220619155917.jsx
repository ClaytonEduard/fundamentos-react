import './Contador.css'
import React, { Component } from 'react'

import Display from './Display'

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

    render() {
        return (
            <div className='Contador'>
                <h2>Contador</h2>
                <div>
                    <label for="passoInput">Passo:</label>
                    <input id='passoInput' type="number" value={this.state.passo}
                        onChange={e => this.setState({ passo: +e.target.value })} />
                </div>
                <Display>   </Display>
                <div>
                    <button onClick={this.incremento}>+</button>
                    <button onClick={this.decremento}>-</button>
                </div>
            </div>
        )
    }
}