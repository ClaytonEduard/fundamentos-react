import React from "react"

<div>
    <label for="passoInput">Passo:</label>
    <input id='passoInput' type="number" value={this.state.passo}
        onChange={e => this.setState({ passo: +e.target.value })} />
</div>