import React from 'react'

const Task  = ({ task, ...props }) => {

    const ActionButton = () => 
    <div className="action-btn">
        {task.done
        ? <p onClick={props.deleteTask} style={{color : 'green' }}>DONE</p>
        : <p onClick={props.doneTask} style={{color : 'red' }}>TODO</p>}
    </div>

    const className = 'task ' + (task.done ? 'task-done' : '') 

    return (
        <div className={className}>
            <p>{task.title}</p>
            <ActionButton/>
        </div>
    )
}

export default Task;