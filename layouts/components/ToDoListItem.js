export default function ToDoListItem({name})
{
    return(
        <li className="list-group-item bg-dark text-white d-flex justify-content-between">
            <span>{name}</span>
            <div >
                <a className="mx-1" href="">
                    <i className="bi bi-pencil"></i>
                </a>
                <a className="mx-1" href="">
                    <i className="bi bi-check-square"></i>
                </a>
            </div>
        </li>
    )
}