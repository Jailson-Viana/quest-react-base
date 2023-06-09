import React from 'react'
import './index.css'

const Button = (props) => {
    return <button className="button-btn" onClick={() => alert(`A label do botão é: ${props.label}`)}>{props.label}</button>
}

export default Button