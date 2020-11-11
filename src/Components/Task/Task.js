import React from 'react'
import './Task.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'



function Task(props) {

    return (
        <div className="task__container">
            <div className="left">
                <h3> {props.task} </h3>
                <h5 className="date"> Due Fri, Aug 20 </h5>
            </div>
            <div className="right">
                <FontAwesomeIcon icon={faClock} />
            </div>

        </div>
    )
}

export default Task
