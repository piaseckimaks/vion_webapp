import { useState } from "react"
export default function ToDoListItem({name})
{
    const [editMode, setEditMode] = useState(false)
    const [task, setTask] = useState('')
    const [taskDone, setTaskDone] = useState(false)

    if(editMode) return (
        <li className="list-group-item bg-dark text-white d-flex justify-content-between">
            <input className="bg-black text-white" value={task} onChange={(e)=> setTask(e.currentTarget.value)}></input>
            <a title="save" className="mx-1" onClick={()=> setEditMode( editMode ? false : true )}>
                <i className="bi bi-check-circle"></i>
            </a>
        </li>
    )
    
    if(taskDone) return(
        <li className="list-group-item bg-dark text-white d-flex justify-content-between">
            <span className='text-decoration-line-through'>{task}</span>
            <div><i title="delete task from list" className="bi bi-dash-circle del-btn"></i></div>
        </li>
    )

    return(
        <li className="list-group-item bg-dark text-white d-flex justify-content-between">
            <span>{task}</span>
            <div>
                <a title="edit task" className="mx-1" onClick={()=> setEditMode( editMode ? false : true )}>
                    <i className="bi bi-pencil"></i>
                </a>
                <a title="mark as done" className="mx-1" onClick={()=> setTaskDone(true)}>
                    <i className="bi bi-check-square"></i>
                </a>
            </div>
        </li>
    )
}