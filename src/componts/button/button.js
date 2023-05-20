import React from 'react'
import './button.css'

const labelStyle = (label) => {
    label = Button.defaultProps.label
    alert(`A label do botão é: ${label}`)

}
const Button = (props) => {
    return (
        <button
            className="button-btn"
            onClick={labelStyle}>
            {/* poderia ser assim também */}
            {/* onClick={() => {labelStyle(props.label)}} */}
            {props.label}
        </button>
    )
}

Button.defaultProps = {
    label: "Saiba mais"
}

export default Button