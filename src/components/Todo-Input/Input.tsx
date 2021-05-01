import React from 'react'
import './Input.css'
interface InputFeildProps {
    value?: string
    change?: any
    inputRef: React.MutableRefObject<any>
}

const InputFeild = ({ value, change, inputRef}: InputFeildProps) => {
    return (
        <input ref={inputRef} value={value} onChange={({ target }) => change(target.value)} className="todo-input" type="text" placeholder="Write here.. " />
    )
}

export default InputFeild
