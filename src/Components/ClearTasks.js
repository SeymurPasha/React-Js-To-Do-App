import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'

export default function ClearTasks(props) {
    

    return (
        <div className = 'clear-task'>
            
        <button onClick = {props.clearAll}>Clear All <FontAwesomeIcon icon = {faTrash}></FontAwesomeIcon></button> 
        </div>
    )
}

