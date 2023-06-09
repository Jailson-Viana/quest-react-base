import React from 'react'
import './index.css'

const TextoSytle = (props) => {
    const {
        texto = "'O maior risco é não assumir nenhum risco. Em um mundo que muda rapidamente, a única estratégia garantida a falhar é não assumir riscos.' - Mark Zuckerberg, o cofundador e CEO do Facebook.",
        textoColor = "red" } = props

    const paragrafoStyle = {
        color: textoColor,
        textTransform: "uppercase"
    }
    return <p className="transformar-texto" style={paragrafoStyle}>{texto}</p>
}

export default TextoSytle

