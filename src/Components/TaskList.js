import React from 'react'
import TaskItem from './TaskItem'

class TaskList extends React.Component {

   updateTaskFn = (task) => {
      this.props.updateTask(task)
  }
   removeTaskFn = (task) => {
      this.props.removeTask(task)
  }
    render() {
 return (
        <div>
        {this.props.tasks.map((task,index) => <TaskItem  key={index} task={task} completeTask = {this.props.completeTask} updateTaskFn={this.updateTaskFn} removeTaskFn={this.removeTaskFn}/>)}
        </div>
    )
 }
}

export default TaskList