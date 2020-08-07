import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons'

const TaskItem = (props) => {

    
const removeTask = () => {
    props.removeTaskFn(props.task)
}
    
const completeTask = () => {
    props.updateTaskFn(props.task)
    
}
    
    return(
        <div  className = 'task'>
        <div className = "text">  
        <div className ={'' + (props.task.completed ? ' complete' : '')}>{props.task.text}</div>
        </div>
        <div className = "buttons">
        <button onClick = {removeTask}><FontAwesomeIcon icon={faTrash} /></button>
        <button onClick = {completeTask}><FontAwesomeIcon icon={faCheck} /></button>
        </div>
        </div>
    )
}

export default TaskItem