import React from 'react'

class AddTask extends React.Component {
    constructor() {
        super()
        this.state = {
            task:''
        }
        
    }

    setTask = (e) => {
     this.setState({
         task : e.target.value
     })
    }  

    passTask = (e) => {
        if(document.querySelector('input').value !== '') {
        this.props.addToTasks(this.state.task)
        document.querySelector('input').value = ''
        }
        
    }
    
   render() {
 
   
 return (
        <div className = "input-task">
        <input onChange = {this.setTask} type = "text"></input>
        <button onClick = {this.passTask} >Add</button>
        </div>
    )

 }

}
export default AddTask