import React from 'react'
import './Button.css'

interface ButtonProps{
    text: string
    setTodosItems?: any
}

const Button = ({ text, setTodosItems}:ButtonProps) => {
    return (
        <div>
            <button onClick={setTodosItems} className="btn" > {text} </button>
        </div>
    )
}

export default Button
