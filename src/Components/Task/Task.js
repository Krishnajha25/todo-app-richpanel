import React from 'react'
import './Task.css'


function Task(props) {

    return (
        <div className="task__container">
            <h3> {props.task} </h3>
            <h5 className="date"> Due Fri, Aug 20 </h5>
        </div>
    )
}

export default Task
