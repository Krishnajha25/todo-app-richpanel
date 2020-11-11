import React from 'react'
import './AddTask.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function AddTask(props) {

    const overlayStyle = {
        position: 'relative',
        background: '#fafafa',

    }

    const addHandler = () => {
        props.setGrow(!props.grow)
    }

    const taskHandler = (e) => {
        // var task = e.target.value
        // props.setTasks([task])
    }

    return (
        <div className="addtask__container">
            <div className="closeBtn" onClick={addHandler} >
                <FontAwesomeIcon icon={faTimes} />
            </div>
            <input type="text" name="" id="" onChange={(e) => taskHandler(e)} autoFocus={true} placeholder="What would you like to add ?" />
            <div className="overlay" onClick={addHandler} style={overlayStyle}></div>
        </div>
    )
}

export default AddTask
