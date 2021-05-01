import React, { useRef } from 'react'
import './ListItem.css'

interface ListItemProps {
    deleteTodo: any
    todoDone: any
    todoitem: any
    setUpdate: any
}

const ListItem = ({ deleteTodo, todoDone, todoitem, setUpdate }: ListItemProps) => {
    const inputRef: React.MutableRefObject<any> = useRef()

    const focus = () => {
        if (inputRef === null || undefined) {
            return
        }
        inputRef.current.focus()
    }

    return (
        <div className="listitem">
            <p>
                <input ref={inputRef} className={todoitem.isDone === true ? 'todoIncomplete todoCompleted' : 'todoIncomplete'} type="text" value={todoitem.item} onChange={(e) => { setUpdate(e.target.value, todoitem.id) }} />
            </p>
            <div>
                <i onClick={deleteTodo} className="fas fa-trash-alt"></i>
                <i onClick={() => focus()} className="fas fa-edit"></i>
                <i onClick={todoDone} className="fas fa-check-square"></i>
            </div>
        </div>
    )
}

export default ListItem
