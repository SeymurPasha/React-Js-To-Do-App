import React from 'react'
import TaskList from './Components/TaskList'
import AddTask from './Components/AddTask'
import ClearTasks from './Components/ClearTasks'
import './App.css'


    class App extends React.Component {
    constructor(){
      super()
      this.state =  {
       tasks:[],
       date:0
    }

  }


    addToTasks = (task) => {
    this.setState({
    tasks:[...this.state.tasks,{
    text:task,completed:false
      }]
   })
   
 }
 
      updateTask = (task) => {
    const newTasks =  this.state.tasks.map(_task => {
        if(task === _task)
        return { 
          text : task.text,
          completed: !task.completed
        }
        else
        return _task
      })
      this.setState({
        tasks : newTasks
      })
    }
 
      removeTask = (task) => {
      const newTasks =  this.state.tasks.filter(_task => _task !== task )
        this.setState({
          tasks : newTasks
        })
      
      }
 


      clearAll = () => {
        this.setState({
          tasks: []
        })
       
      }
        
      componentDidMount() {
        const date = new Date()
        
        this.setState({
          date: date.toLocaleDateString()
        })
      }

        render() {
          return(
            <div className = 'App'>
              
              <h1>Plan Your Day</h1>
              <h3>{this.state.date}</h3>
              <AddTask addToTasks= {this.addToTasks} />
              <TaskList  tasks = {this.state.tasks}  updateTask = {this.updateTask} removeTask = {this.removeTask}/>
              <ClearTasks clearAll = {this.clearAll} ></ClearTasks>
            </div>
          )
        }
      }

      export default App