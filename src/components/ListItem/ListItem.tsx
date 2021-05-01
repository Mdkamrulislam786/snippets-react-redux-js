import React from 'react'
import './ListItem.css'

interface ListItemProps {
    deleteTodo: any
    todoDone: any
    todoitem: any
    setUpdate: any
}

const ListItem = ({ deleteTodo, todoDone, todoitem, setUpdate }: ListItemProps) => {

    return (
        <div className="listitem">
            <p>
                <input className={todoitem.isDone === true ? 'todoIncomplete todoCompleted' : 'todoIncomplete'} type="text" value={todoitem.item} onChange={(e) => { setUpdate(e.target.value, todoitem.id) }} />
            </p>
            <div>
                <i onClick={deleteTodo} className="fas fa-trash-alt"></i>
                <i className="fas fa-edit"></i>
                <i onClick={todoDone} className="fas fa-check-square"></i>
            </div>
        </div>
    )
}

export default ListItem
