import React from 'react'
import './Button.css'

interface ButtonProps{
    text: string
}

const Button = ({text}:ButtonProps) => {
    return (
        <div>
            <button className="btn" > {text} </button>
        </div>
    )
}

export default Button
