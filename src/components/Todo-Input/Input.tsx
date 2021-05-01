import React from 'react'
import './Input.css'
interface InputFeildProps {
    value?: string
    change?: any
}

const InputFeild = ({ value, change}: InputFeildProps) => {
    return (
        <input value={value} onChange={({ target }) => change(target.value)} className="todo-input" type="text" placeholder="Write here.. " />
    )
}

export default InputFeild
