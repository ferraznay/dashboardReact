import React from 'react'
import './Input.css'

function Input(props) {

    return(
        <>
        <div className="input-container">
            <label>{props.label}:</label>
            <input type={props.type} placeholder={props.placeholder}/>
        </div>
        </>
    )
}

export default Input