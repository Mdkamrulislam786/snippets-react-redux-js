import React, { useState } from 'react'
import './ListItem.css'

interface ListItemProps {
    text: string
}

const ListItem = ({ text }: ListItemProps) => {
    const [done,setDone] = useState(false)
    return (
        <div className="listitem">
            <p className={done ? "listitemp" : ''}>{text}</p>
            <div>
                <i className="fas fa-trash-alt"></i>
                <i className="fas fa-edit"></i>
                <i onClick={()=> setDone(true)} className="fas fa-check-square"></i>
            </div>
        </div>
    )
}

export default ListItem
