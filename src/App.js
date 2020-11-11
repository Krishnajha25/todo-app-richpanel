import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Task from './Components/Task/Task'
import AddTask from './Components/AddTask/AddTask'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


function App() {


  const Tasks = [
    {
      title:"Get groceries",
    },
    {
      title:"Walk the dog",
    },
    {
      title:"Visit bank",
    },
    {
      title:"Meeting with the folks at office",
    },
  ] 

  const [tasks, setTasks] = useState(Tasks)
  const [grow, setGrow] = useState(false)

  const addHandler = () => {
    setGrow(!grow)
  }

  const delBtn = () => {
    if(isDragged){
      return <div className="btn delBtn">
              <FontAwesomeIcon icon={faTrash} />
            </div>
    }
  }


  // var date = 
  return (
    <div className="main">
      <Header />

      <div className="taskContainer">
        { tasks.map(task => <Task task={task.title} date={task.date} />) }
      </div>
    
      { grow && <AddTask setGrow={setGrow} setTask={setTasks} grow={grow} /> }
      <div className={`btn addBtn ${grow? 'grow': ''}`} onClick={addHandler}>
        <FontAwesomeIcon icon={faPlus} />
      </div>
      {delBtn}
    </div>
  );
}

export default App;
