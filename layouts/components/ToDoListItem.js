import { useState } from "react"
export default function ToDoListItem({name})
{
    const [editMode, setEditMode] = useState(false)
    const [task, setTask] = useState('')
    const [taskDone, setTaskDone] = useState(false)

    if(editMode) return (
        <li className="list-group-item bg-dark text-white d-flex justify-content-between align-items-center">
            <textarea className="bg-black text-white w-100" value={task} onChange={(e)=> setTask(e.currentTarget.value)}></textarea>
            <a title="save" className="mx-1" onClick={()=> setEditMode( editMode ? false : true )}>
                <i className="bi bi-check-circle"></i>
            </a>
        </li>
    )
    
    if(taskDone) return(
        <li className="list-group-item bg-dark text-white d-flex justify-content-between align-items-center">
            <p className='text-break text-decoration-line-through'>{task}</p>
            <div className="mx-1"><i title="delete task from list" className="bi bi-dash-circle del-btn"></i></div>
        </li>
    )

    return(
        <li className="list-group-item bg-dark text-white d-flex justify-content-between align-items-center">
            <p className="text-break ">{task}</p>
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