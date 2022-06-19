/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default (props) => {
    return (
        <div>
            <button onClick={props.onIncremento}>+</button>
            <button onClick={props.onDecremento}>-</button>
        </div>
    )
}